var score = 0;
var round = 1;
var button = document.getElementById("Click");
var roundText = document.getElementById("round");
var scoreText = document.getElementById("score");
var clicks = 0;
var timer;
var green = false;
var red = false;

const commands = [
  "CLICK",
  "DON'T CLICK",
  "CLICK TWICE",
  "CLICK 3 TIMES",
  "WAIT",
  "CLICK WHEN GREEN",
  "DON'T CLICK WHEN GREEN",
  "CLICK WHEN RED",
  "DON'T CLICK WHEN RED",
  "CLICK TWICE WHEN GREEN",
  "CLICK ONCE WHEN RED",
  "WAIT 2 SECONDS",
  "CLICK AFTER 2 SECONDS",
  "DON'T CLICK FOR 3 SECONDS",
];

roundText.innerHTML = "Round: " + round;
scoreText.innerHTML = "Score: " + score;

function pickCommand() {
  randomVariability = Math.floor(Math.random() * 2);
  C_number = Math.floor(Math.random() * round + randomVariability);

  if (C_number >= commands.length) {
    PickedCommand = commands[commands.length - 1];
  } else {
    PickedCommand = commands[C_number];
  }

  green = false;
  red = false;
  button.style.backgroundColor = "";

  if (PickedCommand == commands[1]) {
    timer = setTimeout(() => Check("Timer"), 2000);
  } else if (PickedCommand == commands[4]) {
    timer = setTimeout(
      () => Check("Timer"),
      Math.floor(Math.random() * 10) * 1000,
    );
  } else if (PickedCommand == commands[5]) {
    timer = setTimeout(
      () => atributeChange("green"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[6]) {
    timer = setTimeout(
      () => atributeChange("green"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[7]) {
    timer = setTimeout(
      () => atributeChange("red"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[8]) {
    timer = setTimeout(
      () => atributeChange("red"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[9]) {
    timer = setTimeout(
      () => atributeChange("green"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[10]) {
    timer = setTimeout(
      () => atributeChange("red"),
      Math.floor(Math.random() * 5 + 1) * 1000,
    );
  } else if (PickedCommand == commands[11]) {
    timer = setTimeout(() => Check("Timer"), 2000);
  } else if (PickedCommand == commands[12]) {
    timer = setTimeout(() => atributeChange("after"), 2000);
  } else if (PickedCommand == commands[13]) {
    timer = setTimeout(() => Check("Timer"), 3000);
  }

  return PickedCommand;
}

function atributeChange(colour) {
  if (colour == "green") {
    green = true;
    red = false;
    button.style.backgroundColor = "green";
  }

  if (colour == "red") {
    red = true;
    green = false;
    button.style.backgroundColor = "red";
  }

  if (colour == "after") {
    Check("After");
  }
}

function newRound() {
  round++;
  roundText.innerHTML = "Round: " + round;
  clicks = 0;
  button.innerHTML = pickCommand();
}

button.addEventListener("click", function () {
  clicks++;
  Check("Clicked");
});

function Check(trigger) {
  switch (PickedCommand) {
    case commands[0]:
      if (trigger == "Clicked") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[1]:
      if (trigger == "Clicked") {
        score = 0;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        return;
      } else if (trigger == "Timer") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[2]:
      if (trigger == "Clicked" && clicks == 1) {
        return;
      }

      if (trigger == "Clicked" && clicks == 2) {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[3]:
      if (trigger == "Clicked" && clicks < 3) {
        return;
      }

      if (trigger == "Clicked" && clicks == 3) {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[4]:
      if (trigger == "Clicked") {
        score = 0;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        return;
      }

      if (trigger == "Timer") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[5]:
      if (trigger == "Clicked") {
        if (green) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        } else {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
        }
      }

      break;

    case commands[6]:
      if (trigger == "Clicked") {
        if (!green) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        } else {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
        }
      }

      break;

    case commands[7]:
      if (trigger == "Clicked") {
        if (red) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        } else {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
        }
      }

      break;

    case commands[8]:
      if (trigger == "Clicked") {
        if (!red) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        } else {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
        }
      }

      break;

    case commands[9]:
      if (trigger == "Clicked") {
        if (!green) {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          return;
        }

        if (green && clicks == 1) {
          return;
        }

        if (green && clicks == 2) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        }
      }

      break;

    case commands[10]:
      if (trigger == "Clicked") {
        if (red && clicks == 1) {
          score++;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
          newRound();
        } else {
          score = 0;
          scoreText.innerHTML = "Score: " + score;
          clicks = 0;
          clearTimeout(timer);
        }
      }

      break;

    case commands[11]:
      if (trigger == "Clicked") {
        score = 0;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
      } else if (trigger == "Timer") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[12]:
      if (trigger == "Clicked") {
        score = 0;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
      }

      if (trigger == "After") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;

    case commands[13]:
      if (trigger == "Clicked") {
        score = 0;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
      } else if (trigger == "Timer") {
        score++;
        scoreText.innerHTML = "Score: " + score;
        clicks = 0;
        clearTimeout(timer);
        newRound();
      }

      break;
  }
}

button.innerHTML = pickCommand();

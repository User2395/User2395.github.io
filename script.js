const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
var textScore = document.getElementById("score");
var score = 0;

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");

    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}

function lose() {
  score = 0;
  if (dino.classList != "lose") {
    dino.classList.add("lose");

    setTimeout(function () {
      dino.classList.remove("lose");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current dino Y position
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

  // get current cactus X position
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  // detect collision
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    lose();
  }

  plusone();

}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});

function plusone()
{
  score = score + .01;
  textScore.innerHTML = "Score: " + score.toFixed(3);
}
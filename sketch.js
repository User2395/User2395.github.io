let img;
let gif;

let countDownDate = new Date("Jul 09, 2022 17:00:00").getTime();
let now;

function preload()
{
  gif = loadImage('res/tiesto-dj.gif');
}

function setup() {
  frameRate(60);
  var canvas = createCanvas(windowWidth,windowHeight/1.4);
  background(0);
  img = loadImage('res/logo.png')
}

function draw() {
  background(0);
  textSize(42);
  image(gif, windowWidth-gif.width * 1.2,500,gif.width,gif.height);
  gif.play();

  now = new Date().getTime();
  var timeleft = countDownDate - now;

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);


  fill(255);
  text("Athens 2022",windowWidth/2.2,windowHeight/1.5);

  fill(128,255,128);
  text(`${days}:${hours}:${minutes}:${seconds}`,windowWidth/2.2,windowHeight/1.35);

  textSize(14);
  text(`DAYS  HOURS  MINUTES SECONDS`,windowWidth/2.19,windowHeight/1.3);

	image(img,windowWidth/2.6,windowHeight/4,img.width/2,img.height/2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

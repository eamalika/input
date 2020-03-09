var canvas;

var backscr;
var iphone;
var mySound;

var y;
var angle = 0;
var sliders = [];

var state = true;

function preload(){
  iphone = loadImage('images/iphone.png');
  backscr = loadImage('images/backscr.PNG');
  mySound = loadSound('sounds/alarm.mov');
}

function setup() {
  imageMode(CENTER);

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style("z-index", "-2");
  canvas.position(0, 0);
  background(0);

  y = 105;
  for (var i=0; i < 7; i++){
    sliders[i] = createSlider(0, 255, 50);
    sliders[i].style('width', '20px');
    sliders[i].position(300, y);
    y += 45;
  }

  button = createButton(' ');
  button.position(350, 140);
  button.style('borderWidth', '0');
  button.style('width', '1px');
  button.style('height', '50px');
  button.style("background-color","#000000");
  button.mousePressed(off);

  hello = createDiv(" ");
  hello.style("width: 170px;");
  hello.style("height: 378px;");
  hello.style("borderRadius: 20px;");
  hello.style("background-color: black");
  hello.style("z-index: 100");
  hello.position(166, 60);
  hello.hide();
}

function draw() {
  if (state) {
    mySound.loop();
    var offset = 0;
    for (var i=0; i<7; i++){
      var x = map(sin(angle+offset), -1, 1, 0, 225);
      sliders[i].value(x);
      offset += 0.95;
    }
    angle += 0.4;
    hello.hide();



  } else {
      hello.show();
      mySound.stop();

  }

  image(backscr, 250, 250, 180, 380);
  image(iphone, 250, 250, 200, 400);

}

function off(){
  state = !state;
}

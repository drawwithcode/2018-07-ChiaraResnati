var mic;

function setup() {
  createCanvas(windowWidth, windowHeight);

  mic = new p5.AudioIn();
  mic.start();

  capture = createCapture(VIDEO);
  capture.size(width/4, width/4);
  capture.hide;
}

function draw() {
  background('black');
  var vol = mic.getLevel();
  var myImage = capture.loadPixels();
  image(myImage, width/2-640, height/2-480, 640*2, 480*2);
  filter(THRESHOLD, 1-vol*5);
}

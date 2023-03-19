let capture;
let img;

function setup() {
  createCanvas(400, 400);

  capture = createCapture(VIDEO);
  capture.elt.setAttribute("playsinline", "");
  capture.hide();
  capture.size(360, 480);
  img = createImage(360, 480);
}

function draw() {
  image(img, 0, 0, 360, 480);
}

function touchStarted() {
  return false;
}

function touchMoved() {
  img.copy(capture, mouseX, mouseY, 40, 40, mouseX, mouseY, 40, 40);
}

function touchEnded() {}

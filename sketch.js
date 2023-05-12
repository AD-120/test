let img;
function preload() {
  img = loadImage("selleck.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(255,10);
  noStroke();
  for (let x = 0; x < width + 50; x += 50) {
    for (let y = 0; y < height + 50; y += 50) {
      spinnerRect(x, y);
    }
  }
  blendMode(ADD);
  image(img, width / 2, height / 2, windowWidth, windowHeight);
  blendMode(BLEND);
}

function spinnerRect(x, y) {
  push();
  fill(mouseX,mouseY,30);
  translate(x, y);
  rotate(radians(frameCount));
  rect(0, 0, 70, 10);
  pop();
  fill(220,100,110);
  push();
  translate(x, y);
  rotate(radians(-frameCount));
  ellipse(0, 0, 70, 30);
  pop();
}

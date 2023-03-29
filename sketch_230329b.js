let a;
let b;
let r = 0
let g = 0
let blu = 0

//where shrek and perry are positionned at the start
let perryPositionX = 0
let perryPositionY = 300
let shrekPositionX = 1000
let shrekPositionY = 300
let movement = false

function preload() {
  a = loadImage('PEERY1png.png');
  b = loadImage('shrek.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


//Shrek and Perry moving when the space bar is pressed
function draw() {
  if (shrekPositionX === 500) {

    a = loadImage('perry2PNG.png')
    b = loadImage('Shrek3png.png')

  }

  background(r, g, blu);

  image(a, perryPositionX, mouseY, 200, 200);
  image(b, shrekPositionX, shrekPositionY, 200, 200);

  if (movement === true) {
    perryPositionX = perryPositionX + 10
    shrekPositionX = shrekPositionX - 10
  }
}


function keyPressed() {
  if (keyCode === 32) {
    movement = true
  }
}

//when pressed changes the background colour (has to be clicked before the images disappears)
//when clicking the images also change not just the background colour
function mouseClicked() {
  r = 255
  g = 0
  blu = 0
}

var count = 0;
var spareA = 0;
var spareB = 40;
var points = 0;
var Dice = [];

function setup() {
  noLoop();
  createCanvas(200, 200);
  background(0);
}

function draw() {
  for (var i = 0; i < 9; i++) {
    count++;;
    spareA = count * 40;
    if (spareA > 120)
      spareA = 40;
    Dice.push(new Die(spareA, spareB));
    if (count == 3) {
      count = 0;
      spareB += 40;
    }
    Dice[i].show();
    Dice[i].roll();
  }
}

function mousePressed() {
  redraw();
}
class Die {
  constructor(x, y) {
    this.number = 0;
    this.BaseAndHeight = 36;
    this.positionX = x;
    this.positionY = y;
  }
  roll() {
    var a = (int)(Math.random() * (7 - 1) + 1);
    this.number = a;
  }
  show() {
    fill(255);
    rect(this.positionX, this.positionY, 36, 36);
    if (this.number == 1) {
      fill(0);
      ellipse(this.positionX + 18, this.positionY + 18, 5, 5);
    }
    if (this.number == 2) {
      fill(0);
      ellipse(this.positionX + 9, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 27, 5, 5);
    }
    if (this.number == 3) {
      fill(0);
      ellipse(this.positionX + 9, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 18, this.positionY + 18, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 27, 5, 5);
    }
    if (this.number == 4) {
      fill(0);
      ellipse(this.positionX + 9, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 9, this.positionY + 27, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 27, 5, 5);
    }
    if (this.number == 5) {
      fill(0);
      ellipse(this.positionX + 9, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 9, this.positionY + 27, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 27, 5, 5);
      ellipse(this.positionX + 18, this.positionY + 18, 5, 5);
    }
    if (this.number == 6) {
      fill(0);
      ellipse(this.positionX + 9, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 9, this.positionY + 18, 5, 5);
      ellipse(this.positionX + 9, this.positionY + 27, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 9, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 18, 5, 5);
      ellipse(this.positionX + 27, this.positionY + 27, 5, 5);
    }
  }
}
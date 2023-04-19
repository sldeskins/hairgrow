function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
}

function draw() {
  background('#2196F3');

  //face
  fill("#8d5524");
  noStroke();
  ellipse(250, 310, 195, 280);

  //hairline
  fill("black")
  arc(250, 255, 220, 170, 180, 0);

  //eyebrows 
  noFill(); 
  stroke('#4F2A0A');
  strokeWeight(3);
  arc(205, 320, 50, 40, 190, 345);
  arc(300, 320, 50, 40, 190, 345);

  //ears
  fill("#8d5524");
  noStroke();
  arc(350, 320, 30, 40, 260, 110, OPEN);
  arc(150, 320, 30, 40, 70, 280, OPEN);

  //earrings
  fill('gold');
  circle(155, 337, 20);
  circle(347, 337, 20);

  //nose
  fill('#4F2A0A');
  arc(250, 380, 25, 10, 0, 180);
  arc(260, 377, 15, 10, 315, 135);
  arc(240, 377, 15, 10, 45, 215);

  //mouth
  fill("rgb(132,34,34)");
  noStroke();
  arc(242, 410, 40, 20, 180, 0);
  arc(256, 410, 40, 20, 180, 0);

  fill("rgb(164,58,58)");
  noStroke();
  arc(250, 410, 55, 20, 3, 0);


}

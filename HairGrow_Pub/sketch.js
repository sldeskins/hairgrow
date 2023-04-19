function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
}

let curls = 30;
let afroSize = 380
let hairHeight = 160;

function draw() {
  background('#2196F3');

  //curly for afro
  // drawAfroCurls();

  //afro base
  fill('black');
  circle(250, 250, afroSize);

  //straight hair / hijab
  fill('black');
  noStroke();
  rect(140, 250, 22, 0, hairHeight, 5);



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
function drawAfroCurls() {
  fill('black');
  noStroke();
  //left
  circle(263, 65, curls);
  circle(244, 70, curls);
  circle(225, 65, curls);
  circle(203, 74, curls);
  circle(177, 77, curls);
  circle(148, 91, curls);
  circle(138, 107, curls);
  circle(111, 123, curls);
  circle(71, 198, curls);
  circle(95, 142, curls);
  circle(77, 175, curls);
  circle(64, 275, curls);
  circle(67, 302, curls);
  circle(78, 322, curls);
  circle(91, 345, curls);
  circle(100, 370, curls);
  circle(133, 401, curls);
  circle(153, 416, curls);
  circle(177, 424, curls);
  circle(207, 433, curls);
  circle(122, 383, curls);
  circle(64, 288, curls);
  circle(64, 245, curls);
  circle(65, 223, curls);
  circle(193, 433, curls);
  circle(254, 438, curls);

  //right
  circle(285, 60, curls);
  circle(309, 74, curls);
  circle(332, 81, curls);
  circle(353, 99, curls);
  circle(378, 113, curls);
  circle(398, 134, curls);
  circle(415, 167, curls);
  circle(429, 193, curls);
  circle(426, 212, curls);
  circle(435, 242, curls);
  circle(438, 271, curls);
  circle(429, 298, curls);
  circle(418, 325, curls);
  circle(406, 341, curls);
  circle(398, 365, curls);
  circle(378, 382, curls);
  circle(365, 397, curls);
  circle(343, 413, curls);
  circle(319, 420, curls);
  circle(290, 434, curls);
}

function mousePressed() {
  console.log('I pressed the mouse');
  curls = curls + 1;
  if (curls > 100) {
    curls = 30;
  }

  afroSize = afroSize - 1;
  if (afroSize < 210) {
    afroSize = 380;
  }
  hairHeight = hairHeight = .5;
  if (hairHeight > 300) {
     hairHeight = 160; }
}

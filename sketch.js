//Page 38 Getting Started with p5.js
//By Lauren McCarthy, Casey Reas, and Ben Fry

function setup() {
  createCanvas(800, 600);
  strokeWeight(2);
  ellipseMode(RADIUS);
}

function draw() {
    background(204);
  
  //Neck
  stroke(102); //gray
  line(266,257,266,162); //left
  line(276,257,276,162);//middle
  line(286,257,286,162);//right
  
  //Antennae
  line(276,155,246,112);//small
  line(276,155,306,56);//medium
  line(276,155,342,170);//large
  
  //Body
  noStroke();
  fill(102);//gray
  ellipse(264,377,33,33);//antigravity orb
  fill(0);//black
  rect(219,257,90,120);//body
  fill(102);//gray
  rect(219,274,90,6);//band
  
  //Head
  fill(0);//black
  ellipse(276,155,45,45);//head
  fill(255);
  ellipse(288,150,14,14);//large eye
  fill(0);
  ellipse(288,150,3,3);//pupil
  fill(153);
  ellipse(263,148,5,5);//eye1
  ellipse(296,130,4,4);//eye2
  ellipse(305,162,3,3);//eye3
}

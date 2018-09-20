function setup() {
	// define artboard size
	createCanvas(500,500);
	// Set here the values that are not changing all over the sketch
	strokeWeight(2);
	stroke(170);
}

function draw() {
	background(220);

	//Neck
	stroke(0);
	line(250, 285, 250, 325);

	//arms
	stroke(150);
	line(200,350,170,410);
	line(300,350,330,410);

	//Body
	strokeWeight(2);
	stroke(2525);
	fill(random(100,220),random(120,250),random(150,250),90);
	rect(200, 325, 100, 140);

	//Wheel
	fill(200,160,240,230);
	noStroke();
	ellipse(250, 465, 70, 70);

	//Head
	fill(250);
	ellipse(250, 240, 90, 90);

	//eyes
	fill(random(0,100),random(0,100),random(0,50));
	ellipse(230,240,16,32);
	ellipse(270,240,16,32);
}

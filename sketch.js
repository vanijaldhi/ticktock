function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255, 255, 255);  
  translate (200, 200);
  rotate (-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  noFill();

  stroke(255, 30, 166);
  let secAngle = map(sc , 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secAngle);

  stroke(16, 105, 140);
  let minAngle = map(mn , 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minAngle);

  stroke(255, 166, 30);
  let hourAngle = map(hr% 12 , 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  push ();
  rotate(secAngle);
  strokeWeight(7);
  stroke(0,0,0);
  line (0, 0, 60, 0);
  pop ();
  
  push ();
  rotate(minAngle);
  strokeWeight(7);
  stroke(0,0,0);
  line (0, 0, 80, 0);
  pop ();
  
  push ();
  rotate(hourAngle);
  strokeWeight(7);
  stroke(0,0,0);
  line (0, 0,100, 0);
  pop ();
  

  drawSprites();
}
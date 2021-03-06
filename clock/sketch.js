// Inspiration from:
// Daniel Shiffman
// http://patreon.com/codingtrain

var angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

 function draw() {
   background(255);
   stroke(0);
   fill(0);
   circle(200,200,195);

   var timestamp = new Date();
   let hr = timestamp%(1000*60*60*24)*(1/1000/60/60);
   let mn = timestamp%(1000*60*60)*(1/1000/60);
   let sc =timestamp%(1000*60)*(1/1000);
   
   push();
   translate(200, 200);
   rotate(-90);
   stroke(255, 100, 150);
   strokeWeight(2);
   noFill();
   let secondAngle = map(sc % 60, 0, 60, 0, 360);
   arc(0, 0, 380, 380, 0, secondAngle);
   pop();

   push();
   translate(200,40);
   rotate(0);
   fractal(100,secondAngle,2,255, 100, 150)
   pop();

   push();
   translate(200, 200);
   rotate(-90);
   stroke(150, 100, 255);
   strokeWeight(4);
   noFill();
   let minuteAngle = map(mn % 60, 0, 60, 0, 360);
   arc(0, 0, 360, 360, 0, minuteAngle);
   pop();

   push();
   translate(200,40);
   rotate(0);
   fractal(90,minuteAngle,2,150, 100, 255)
   pop();

   push();
   translate(200, 200);
   rotate(-90);
   stroke(150, 255, 100);
   strokeWeight(8);
   noFill();
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 340, 340, 0, hourAngle);
   pop();

   push();
   translate(200,40);
   rotate(0);
   fractal(80,hourAngle,2,150, 255, 100)
   pop();

   stroke(255);
   fill(0);
   rect(200-80, 200-30, 160, 60, 20);

   let hr2 = pad(hour(),2);
   let mn2 = pad(minute(),2);
   let sc2 = pad(second(),2);
  
   textSize(32);
   stroke(150, 255, 100);
   fill(150, 255, 100);
   text(hr2, 200-65, 200+10);
   stroke(150, 100, 255);
   fill(150, 100, 255);
   text(mn2, 200-15, 200+10);
   stroke(255, 100, 150);
   fill(255, 100, 150);
   text(sc2, 200+35, 200+10);
   stroke(255);
   fill(255);
   text(':', 200-25, 200+10);
   stroke(255);
   fill(255);
   text(':', 200+22, 200+10);

 }	

function fractal(len,angle0,weight,c1,c2,c3) {
  strokeWeight(weight);
  stroke(c1, c2, c3);
  noFill();
  branch(len,angle0);

}

function branch(len,angle0) {
  line(0, 0, 0, len);
  translate(0, len);
  if (len > 4) {
    push();
    rotate(angle0);
    branch(len * 0.67,angle0);
    pop();
    push();
    rotate(-angle0);
    branch(len * 0.67,angle0);
    pop();
  }

}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}


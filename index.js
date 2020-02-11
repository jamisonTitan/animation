const RADIUS = 100;
let currDeg = 0,
  lastDeg = 0;
let x = RADIUS + 110,
  y = 0;
let waveSegments = [];
let stepSize = 10;
const waveSegment = (xLast, yLast, x, y) => {
  (this.x = x), (this.y = y), (this.xLast = xLast), (this.yLast = yLast);
  return {
    xLast,
    yLast,
    x,
    y,
    draw: () => {
      stroke(255, 255, 255);
      //console.log(this.xLast, this.yLast, this.x, this.y);
      line(this.xLast, this.yLast, this.x, this.y);
      //point(110 + RADIUS, y);
    }
  };
};
function setup() {
  cnv = createCanvas(1600, 1000);
  background(0);
  //cnv.parent(sketch);
}

function draw() {
  background(0);
  lastDeg = currDeg;
  currDeg += stepSize;
  stepSize++;
  x = RADIUS * cos(radians(currDeg)) + 110;
  y = RADIUS * sin(radians(currDeg)) + height / 2;
  xLast = RADIUS * cos(radians(lastDeg)) + 110;
  yLast = RADIUS * sin(radians(lastDeg)) + height / 2;
  noFill();
  //console.log(x, y, xLast, yLast);
  waveSegments.push(waveSegment(xLast, yLast, x, y));
  waveSegments.forEach(ws => ws.draw());
  stroke(255, 0, 0);
  strokeWeight(5);
  line(110, height / 2, x, y);
  stroke(100, 100, 100);
  ellipse(110, height / 2, 200);
}


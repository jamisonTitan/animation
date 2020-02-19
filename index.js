const RADIUS = 100;
let currDeg = 0,
  lastDeg = 0;
let x = RADIUS + 110,
  y = 0;
let tiles = [];
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
      line(this.xLast, this.yLast, this.x, this.y);
    }
  };
};
const drawTile = (xoff, yoff) => (xLast, yLast, x, y) => {
  noFill();
  //currWaveSegment = waveSegment(xLast + xoff, yLast + yoff, x + xoff, y + yoff);
  //currWaveSegment.draw();
  stroke(255, 255, 255);
  line(xLast + xoff, yLast + yoff, x + xoff, y + yoff);
  stroke(255, 0, 0);
  strokeWeight(5);
  line(xoff, yoff, x + xoff, y + yoff);
  stroke(100, 100, 100);
  //ellipse(xoff, yoff, 200);
};
function setup() {
  cnv = createCanvas(800, 800);
  background(0);
  for (i = RADIUS; i < width; i += RADIUS) {
    for (j = RADIUS; j < height; j += RADIUS) {
      tiles.push({ draw: drawTile(i, j) });
    }
  }
}

function draw() {
  background(0);
  lastDeg = currDeg;
  currDeg += stepSize;
  stepSize += 0.05;
  x = RADIUS * cos(radians(currDeg));
  y = RADIUS * sin(radians(currDeg));
  xLast = RADIUS * cos(radians(lastDeg));
  yLast = RADIUS * sin(radians(lastDeg));
  tiles.forEach(tile => {
    tile.draw(xLast, yLast, x, y);
  });
}

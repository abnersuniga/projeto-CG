let drawingMode = "none";
let clicks = [];



function setup() {
  createCanvas(640, 480);
  strokeWeight(3);
  rect(0, 0, 639, 479);
}

function draw() {

}

function drawLine() {
  console.log(clicks.length);
  let point1 = clicks.pop();
  let point2 = clicks.pop();
  strokeWeight(2);
  line(point1.x, point1.y, point2.x, point2.y);
}

function drawLineMode() {
  drawingMode = "line";
}

function mouseClicked() {
  console.log(clicks.length);
  if(drawingMode == "line") {
    if(clicks.length < 2) {
      clicks.push({
        x: mouseX,
        y: mouseY
      });
    } else {
      clicks.push({
        x: mouseX,
        y: mouseY
      });
      drawLine();
      clicks = []
      drawingMode = "none";
    }
  }
}
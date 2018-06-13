let state = {
  drawingMode: "none",
  clicks: [],
  objects: []
}

function setup() {
  createCanvas(640, 480);
}

function draw() {

  // Border Canvas
  strokeWeight(3);
  rect(0, 0, 639, 479);

  // While a user did
  if(state.drawingMode == "line" && state.clicks.length > 1) {
    line(state.clicks[state.clicks.length-1].x, state.clicks[state.clicks.length-1].y, mouseX, mouseY);
  }

  
  for(object of state.objects) {
    object.show();
  }
}

class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  show() {
    line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
  }
}

function createLine() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const line = new Line(point1, point2)
  state.objects.push(line);

  console.log(state.objects);
}

function drawLineMode() {
  state.drawingMode = "line";
}

function mouseClicked() {
  if(state.drawingMode == "line") {
    if(state.clicks.length < 2) {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
    } else {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
      
      createLine();
      // Reset
      state.clicks = []
      state.drawingMode = "none";
    }
  }
}
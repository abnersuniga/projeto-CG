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

  // When the user hasn't choose a last point
  if(state.drawingMode == "line" && state.clicks.length > 1) {
    line(state.clicks[state.clicks.length-1].x, state.clicks[state.clicks.length-1].y, mouseX, mouseY);
  }

  if(state.drawingMode == "circle" && state.clicks.length > 1) {
    let x = state.clicks[state.clicks.length-1].x
    let y = state.clicks[state.clicks.length-1].y
    let distance = dist(x, y, mouseX, mouseY);
    ellipse(x, y, distance, distance);
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

class Circle {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }

  show() {
    let distance = dist(this.point1.x, this.point1.y, this.point2.x, this.point2.y)
    ellipse(this.point2.x, this.point2.y, distance, distance);
  }
}

function createLine() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const line = new Line(point1, point2)
  state.objects.push(line);
}

function createCircle() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const circle = new Circle(point1, point2)
  state.objects.push(circle);
}

function drawLineMode() {
  state.drawingMode = "line";
}

function drawCircleMode() {
  state.drawingMode = "circle";
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

  if(state.drawingMode == "circle") {
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
      
      createCircle();
      // Reset
      state.clicks = []
      state.drawingMode = "none";
    }
  }
}
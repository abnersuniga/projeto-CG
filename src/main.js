const state = {
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

  // When the user hasn't chosen the last point
  if(state.drawingMode == "line" && state.clicks.length > 1) {
    let firstPoint = state.clicks[state.clicks.length-1]
    line(firstPoint.x, firstPoint.y, mouseX, mouseY);
  }
  if(state.drawingMode == "circle" && state.clicks.length > 1) {
    let x = state.clicks[state.clicks.length-1].x;
    let y = state.clicks[state.clicks.length-1].y;
    let distance = dist(x, y, mouseX, mouseY);
    ellipse(x, y, distance*2, distance*2);
  }
  if(state.drawingMode == "rect" && state.clicks.length > 1) {
    let x = state.clicks[state.clicks.length-1].x;
    let y = state.clicks[state.clicks.length-1].y;
    let width = mouseX - x;
    let height = mouseY - y;
    rect(x, y, width, height);
  }
  if(state.drawingMode == "triangle") {
    if(state.clicks.length > 1) {
      let firstPoint = state.clicks[state.clicks.length-1]
      line(firstPoint.x, firstPoint.y, mouseX, mouseY);
      if(state.clicks.length > 2) {
        let secondPoint = state.clicks[state.clicks.length-2]
        line(secondPoint.x, secondPoint.y, firstPoint.x, firstPoint.y);
      }
    }
  }

  for(object of state.objects) {
    object.show();
  }
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
      state.clicks = [];
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
      state.clicks = [];
      state.drawingMode = "none";
    }
  }

  if(state.drawingMode == "rect") {
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
      
      createRect();
      // Reset
      state.clicks = [];
      state.drawingMode = "none";
    }
  }

  if(state.drawingMode == "triangle") {
    if(state.clicks.length < 3) {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
    } else {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
      
      createTriangle();
      // Reset
      state.clicks = [];
      state.drawingMode = "none";
    }
  }

}
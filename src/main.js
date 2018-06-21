const state = {
  drawingMode: "none",
  opMode: "none",
  clicks: [],
  objects: []
}
let cnv;

function centerCanvas() {
  let x = (windowWidth - width) / 2;

  let mainHeight = document.getElementById('main').offsetHeight;
  let y = mainHeight + 10;
  cnv.position(x, y);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cnv = createCanvas(640, 480);
  centerCanvas();
}

function draw() {

  // Border Canvas
  strokeWeight(3);
  stroke(0);
  fill(255);
  rect(0, 0, width-1, height-1);

  for(object of state.objects) {
    object.show();
  }
  
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

  // Highlights and Select
  if(state.opMode != "none") {
    for(object of state.objects) {
      switch(object.constructor) {
        case Line:
          if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
            object.highlight = true;
          } else {
            object.highlight = false;
          }
          break;
        case Circle:
          if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
            object.highlight = true;
          } else {
            object.highlight = false;
          }
          break;
        case Rect:
          if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
            object.highlight = true;
          } else {
            object.highlight = false;
          }
          break;
        case Triangle:
          if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
            object.highlight = true;
          } else {
            object.highlight = false;
          }
          break;
      }
    }
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
  
  if(state.opMode == "scale") {
    if(state.clicks.length < 1) {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
    } else {
      state.clicks.push({
        x: mouseX,
        y: mouseY
      });
      
      opScale(state.clicks.pop());
      // Reset
      state.clicks = [];
      state.opMode = "none";
    }
  }

} 
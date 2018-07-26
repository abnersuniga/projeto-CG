function drawLineMode() {
  state.drawingMode = "line";
}

function drawCircleMode() {
  state.drawingMode = "circle";
}

function drawRectMode() {
  state.drawingMode = "rect";
}

function drawTriangleMode() {
  state.drawingMode = "triangle";
}

function opScaleMode() {
  state.operationMode = "scale";
}

function opRotateMode() {
  state.operationMode = "rotate";
}

function opTranslateMode() {
  state.operationMode = "translate";
}

function opZoom() {
  state.operationMode = "zoom";
}
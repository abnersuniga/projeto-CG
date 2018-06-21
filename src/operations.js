function clearCanvas() {
  state.objects = [];
}

function opScale(clickPoint) {
  for(object of state.objects) {
    switch(object.constructor) {
      case Line:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          object.select = true;
          object.highlight = false;
        }
        break;
      case Circle:
        if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          object.select = true;
          object.highlight = false;
        } 
        break;
      case Rect:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          object.select = true;
          object.highlight = false;
        }
        break;
      case Triangle:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          object.select = true;
          object.highlight = false;
        }
        break;
    }
  }
}
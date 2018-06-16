function clearCanvas() {
  state.objects = [];
}

function opScale(clickPoint) {
  for(object of state.objects) {
    switch(object.constructor) {
      case Circle:
        console.log(SAT.pointInCircle(
          new SAT.Vector(clickPoint.x,clickPoint.y), object.SAT)
        );
        break;
      case Rect:
        console.log(SAT.pointInPolygon(
          new SAT.Vector(clickPoint.x,clickPoint.y), object.SAT)
        );
        break;
      case Triangle:
        console.log(object);
        console.log(object.SAT1);
        console.log(
          SAT.pointInPolygon(new SAT.Vector(clickPoint.x,clickPoint.y), object.SAT1)
        );
        break;
    }
  }
}
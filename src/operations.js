function clearCanvas() {
  let oldState = state.objects.slice(0);
  state.objects = state.objects.filter(object => object.select == false);
  if (state.objects.length == oldState.length) {
    state.objects = [];
    console.log("Clear All");
  } else {
    console.log("Clear Selected");
  }
}

function selectingObjects(clickPoint) {
  for(object of state.objects) {
    switch(object.constructor) {
      case Line:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          if(object.select) {
            object.select = false;
          } else {
            object.select = true;
          }
          object.highlight = false;
        }
        break;
      case Circle:
        if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          if(object.select) {
            object.select = false;
          } else {
            object.select = true;
          }
          object.highlight = false;
        } 
        break;
      case Rect:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          if(object.select) {
            object.select = false;
          } else {
            object.select = true;
          }
          object.highlight = false;
        }
        break;
      case Triangle:
        if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
          if(object.select) {
            object.select = false;
          } else {
            object.select = true;
          }
          object.highlight = false;
        }
        break;
    }
  }
}

function selecting(mouseX,mouseY) {
  for(object of state.objects) {
    if(object.constructor == Line || object.constructor == Rect || object.constructor == Triangle){
      if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
        object.select = true;
        return true;
      }
    }
    if(object.constructor == Circle){
      if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
        object.select = true;
        return true;
      } 
    }
  }
  return false;
}

function translateOp() {
  const place = state.clicks.pop();
  const point = state.clicks.pop();
  for(object of state.objects) {
    if(object.select == true) {
      object.translate(place);

      console.log("Translate " + object.constructor.name + " to <" + object.point1.x + ',' + object.point1.y + ">");
      object.select = false;
    }
  }
}

function zoom() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  
  let xmin, xmax, ymin, ymax;

  if(point1.x < point2.x) {
    xmin = point1.x;
    xmax = point2.x;
  } else {
    xmin = point2.x;
    xmax = point1.x;
  }
  if(point1.y < point2.y) {
    ymin = point1.y;
    ymax = point2.y;
  } else {
    ymin = point2.y;
    ymax = point1.x;
  }

  for(object of state.objects) {
    let oldPoint = object.point2;
    if(object.constructor == Triangle) {
      oldPoint = object.point3;
    }
    object.translate({x:0,y:0});
    object.scale(cnv.width/(xmax-xmin), cnv.height/(ymax-ymin));
    object.translate({x:(oldPoint.x-xmin)/(xmax-xmin)*cnv.width, y:(oldPoint.y-ymin)/(ymax-ymin)*cnv.height});
  }
}

function scaleOp() {
  for(object of state.objects) {
    if(object.select == true) {
      const sx = document.getElementById("sx").value;
      const sy = document.getElementById("sy").value;
      let oldPoint = object.point2;
      if(object.constructor == Triangle) {
        oldPoint = object.point3;
      }
      object.translate({x:0,y:0});
      object.scale(sx, sy);
      object.translate(oldPoint);

      console.log("Scale " +object.constructor.name + " Sx<" + sx + "> Sy<" + sy + ">");
      
      object.select = false;
      document.getElementById('scaleModal').style.display='none';
    }
  }
}

function rotateOp() {
  for(object of state.objects) {
    if(object.select == true) {
      const ang = document.getElementById("ang").value;
      let oldPoint = object.point2;
      if(object.constructor == Triangle) {
        oldPoint = object.point3;
      }

      object.translate({x:0,y:0});
      object.rotate(ang);
      object.translate(oldPoint);
      console.log(object.point1);
      console.log(object.point2);
      console.log(object.point3);
      console.log(object.point4);
      
      object.select = false;
      document.getElementById('rotateModal').style.display='none';
    }
  }
}

function opZoomExtend() {
  let xmin, xmax, ymin, ymax;

  // Detecta a maior ou menor coordenada x ou y do objeto
  function aux(object, coord, op) {

    if(object.constructor == Line) {
      return op(object.point1[coord],object.point2[coord]);
    }
    if(object.constructor == Circle) {
      return op(object.point2[coord] - object.distance,object.point2[coord] + object.distance);
    }
    if(object.constructor == Rect) {
      const _array = [object.point1[coord], object.point2[coord], object.point3[coord], object.point4[coord]]
      return op.apply(Math,_array);
    }
    if(object.constructor == Triangle) {
      const _array = [object.point1[coord], object.point2[coord], object.point3[coord]]
      return op.apply(Math,_array);
    }
  }

  for(object of state.objects) {
    if(xmin == undefined || aux(object, 'x', Math.min) < xmin) {
      xmin = aux(object, 'x', Math.min);
    }
    if(xmax == undefined || aux(object, 'x', Math.max) > xmax) {
      xmax = aux(object, 'x', Math.max);
    }
    if(ymin == undefined || aux(object, 'y', Math.min) < ymin) {
      ymin = aux(object, 'y', Math.min);
    }
    if(ymax == undefined || aux(object, 'y', Math.max) > ymax) {
      ymax = aux(object, 'y', Math.max);
    }
  }

  for(object of state.objects) {
    let oldPoint = object.point2;
    if(object.constructor == Triangle) {
      oldPoint = object.point3;
    }
    object.translate({x:0,y:0});
    object.scale(cnv.width/(xmax-xmin), cnv.height/(ymax-ymin));
    object.translate({x:(oldPoint.x-xmin)/(xmax-xmin)*cnv.width, y:(oldPoint.y-ymin)/(ymax-ymin)*cnv.height});
  }

  console.log("Zoom Extend");

}

function help() {
  document.getElementById('helpModal').style.display='block';
}
function helpClose() {
  document.getElementById('helpModal').style.display='none';
}
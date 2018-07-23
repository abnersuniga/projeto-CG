function clearCanvas() {
  state.objects = [];
}

// function selecting(clickPoint) {
//   for(object of state.objects) {
//     switch(object.constructor) {
//       case Line:
//         if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
//           if(object.select) {
//             object.select = false;
//           } else {
//             object.select = true;
//           }
//           object.highlight = false;
//         }
//         break;
//       case Circle:
//         if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
//           if(object.select) {
//             object.select = false;
//           } else {
//             object.select = true;
//           }
//           object.highlight = false;
//         } 
//         break;
//       case Rect:
//         if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
//           if(object.select) {
//             object.select = false;
//           } else {
//             object.select = true;
//           }
//           object.highlight = false;
//         }
//         break;
//       case Triangle:
//         if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
//           if(object.select) {
//             object.select = false;
//           } else {
//             object.select = true;
//           }
//           object.highlight = false;
//         }
//         break;
//     }
//   }
// }

function selecting(mouseX,mouseY) {
  for(object of state.objects) {
    if(object.constructor == Line || object.constructor == Rect || object.constructor == Triangle){
      if(SAT.pointInPolygon(new SAT.Vector(mouseX,mouseY), object.SAT)) {
        object.select = true;
        break;
      }
    }
    if(object.constructor == Circle){
      if(SAT.pointInCircle(new SAT.Vector(mouseX,mouseY), object.SAT)) {
        object.select = true;
        break;
      } 
    }
  }
}

function translateOp() {
  const place = state.clicks.pop();
  const point = state.clicks.pop();
  for(object of state.objects) {
    if(object.select == true) {
      object.translate(place);
      object.select = false;
    }
  }
}
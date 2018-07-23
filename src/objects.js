class Line {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = {
      x: point1.x,
      y: point1.y + 10
    }
    this.point4 = {
      x: point2.x,
      y: point2.y + 10
    }

    this.width = point1.x - point2.x;
    this.height = point1.y - point2.y;

    this.highlight = false;
    this.select = false;
  
    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point4.x, this.point4.y),
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }
  
  show() {
    if(this.highlight) {
      stroke('rgba(255, 153, 255, 0.40)');
      line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
    } else if(this.select) {
      stroke('rgba(0, 140, 186, 0.40)');
      line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
    } else {
      stroke(0);
      line(this.point1.x, this.point1.y, this.point2.x, this.point2.y);
    }
  }

  translate(newPoint) {
    this.point2 = newPoint;
    this.point1 = {
      x: newPoint.x + this.width,
      y: newPoint.y + this.height
    };
    this.point3 = {
      x: this.point1.x,
      y: this.point1.y + 10
    };
    this.point4 = {
      x: this.point2.x,
      y: this.point2.y + 10
    };
    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point4.x, this.point4.y),
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }

  scale(Sx, Sy) {
    this.point1.x = Sx * this.point1.x;
    this.point1.y = Sy * this.point1.y;

    this.point2.x = Sx * this.point2.x;
    this.point2.y = Sx * this.point2.y;
  }
}
  
class Circle {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.highlight = false;
    this.select = false;
    this.distance = dist(this.point1.x, this.point1.y, this.point2.x, this.point2.y);

    const V = SAT.Vector;
    const C = SAT.Circle;
    this.SAT = new C(
      new V(point2.x,point2.y), 
      this.distance
    );
  }
  
  show() {
    stroke(0);
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
      ellipse(this.point2.x, this.point2.y, this.distance*2, this.distance*2);
    } else if(this.select) {
      fill('rgba(0, 140, 186, 0.40)');
      ellipse(this.point2.x, this.point2.y, this.distance*2, this.distance*2);
    } else {
      fill(255);
      ellipse(this.point2.x, this.point2.y, this.distance*2, this.distance*2);
    }
  }

  translate(newPoint) {
    this.point2 = newPoint;
    const V = SAT.Vector;
    const C = SAT.Circle;
    this.SAT = new C(
      new V(this.point2.x,this.point2.y), 
      this.distance
    );
  }
}
  
class Rect {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.point3 = {
      x: point1.x,
      y: point2.y
    }
    this.point4 = {
      x: point2.x,
      y: point1.y
    }
    this.highlight = false;
    this.select = false;
    this.width = point2.x - point1.x;
    this.height = point2.y - point1.y;
  
    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point4.x, this.point4.y),
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }
  
  show() {
    stroke(0);
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
      rect(this.point1.x, this.point1.y, this.width, this.height);
    } else if(this.select) {
      fill('rgba(0, 140, 186, 0.40)');
      rect(this.point1.x, this.point1.y, this.width, this.height);
    } else {
      fill(255);
      rect(this.point1.x, this.point1.y, this.width, this.height);
    }
  }

  translate(newPoint) {
    this.point2 = newPoint;
    this.point1 = {
      x: newPoint.x - this.width,
      y: newPoint.y - this.height
    }
    this.point3 = {
      x: newPoint.x - this.width,
      y: newPoint.y
    }
    this.point4 = {
      x: newPoint.x,
      y: newPoint.y - this.height
    }
    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point4.x, this.point4.y),
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }

  scale(Sx, Sy) {
    this.translate(-this.point2.x, -this.point2.y);
    console.log(this);

    this.point1.x = Sx * this.point1.x;
    this.point1.y = Sy * this.point1.y;
    
    this.point2.x = Sx * this.point2.x;
    this.point2.y = Sy * this.point2.y;

    this.point3.x = Sx * this.point3.x;
    this.point3.y = Sy * this.point3.y;

    this.point4.x = Sx * this.point4.x;
    this.point4.y = Sy * this.point4.y;

    this.translate(this.point2.x, this.point2.y);
  }

}

class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
		this.point2 = point2;
    this.point3 = point3;
    this.highlight = false;
    this.select = false;

    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }
  
  show() {
    stroke(0);
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
      triangle(
        this.point1.x, this.point1.y,
        this.point2.x, this.point2.y,
        this.point3.x, this.point3.y
      );
    } else if(this.select) {
      fill('rgba(0, 140, 186, 0.40)');
      triangle(
        this.point1.x, this.point1.y,
        this.point2.x, this.point2.y,
        this.point3.x, this.point3.y
      );
    } else {
      fill(255);
      triangle(
        this.point1.x, this.point1.y,
        this.point2.x, this.point2.y,
        this.point3.x, this.point3.y
      );
    }
  }

  translate(newPoint) {
    const d31 = {
      x: this.point3.x - this.point1.x,
      y: this.point3.y - this.point1.y
    }
    const d32 = {
      x: this.point3.x - this.point2.x,
      y: this.point3.y - this.point2.y
    }
    this.point3 = newPoint;
    this.point1 = {
      x: newPoint.x - d31.x,
      y: newPoint.y - d31.y
    }
    this.point2 = {
      x: newPoint.x - d32.x,
      y: newPoint.y - d32.y
    }
    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(), 
      [
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }
}


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
    this.highlight = false;
    this.distance = dist(this.point1.x, this.point1.y, this.point2.x, this.point2.y);

    const V = SAT.Vector;
    const C = SAT.Circle;
    this.SAT = new C(
      new V(point2.x,point2.y), 
      this.distance
    );
  }
  
  show() {
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
      ellipse(this.point2.x, this.point2.y, this.distance*2, this.distance*2);
    } else {
      fill(255);
      ellipse(this.point2.x, this.point2.y, this.distance*2, this.distance*2);
    }
  }
}
  
class Rect {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
    this.highlight = false;
    
    const V = SAT.Vector;
    const P = SAT.Polygon;
    const B = SAT.Box;
    this.width = point2.x - point1.x;
    this.height = point2.y - point1.y;
    this.SAT = new B(
      new V(point2.x, point2.y), 
      point1.x - point2.x, 
      point1.y - point2.y
    ).toPolygon();
  }
  
  show() {
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
      rect(this.point1.x, this.point1.y, this.width, this.height);
    } else {
      fill(255);
      rect(this.point1.x, this.point1.y, this.width, this.height);
    }
  }
}

class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
		this.point2 = point2;
    this.point3 = point3;
    this.highlight = false;

    const V = SAT.Vector;
    const P = SAT.Polygon;
    this.SAT =  new P(
      new V(this.point3.x, this.point3.y), 
      [
        new V(this.point3.x, this.point3.y),
        new V(this.point2.x, this.point2.y), 
        new V(this.point1.x, this.point1.y)
      ]
    );
  }
  
  show() {
    if(this.highlight) {
      fill('rgba(255, 153, 255, 0.40)');
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
}

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
    ellipse(this.point2.x, this.point2.y, distance*2, distance*2);
  }
}
  
class Rect {
  constructor(point1, point2) {
    this.point1 = point1;
    this.point2 = point2;
  }
  
  show() {
    let width = this.point2.x - this.point1.x;
    let height = this.point2.y - this.point1.y;
    rect(this.point1.x, this.point1.y, width, height);
  }
}

class Triangle {
  constructor(point1, point2, point3) {
    this.point1 = point1;
		this.point2 = point2;
		this.point3 = point3;
  }
  
  show() {
		triangle(this.point1.x, this.point1.y, this.point2.x, this.point2.y, this.point3.x, this.point3.y);
  }
}

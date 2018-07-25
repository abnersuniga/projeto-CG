function createLine() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const line = new Line(point1, point2)
  console.log("Create Line <" + line.point1.x + ',' + line.point1.y + "> <" + line.point2.x + ',' + line.point2.y + ">");
  state.objects.push(line);
}

function createCircle() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const circle = new Circle(point1, point2)
  console.log("Create Circle <" + circle.point1.x + ',' + circle.point1.y + "> <" + circle.point2.x + ',' + circle.point2.y + ">");
  state.objects.push(circle);
}

function createRect() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const rect = new Rect(point1, point2)
  console.log("Create Rect <" + rect.point1.x + ',' + rect.point1.y + "> <" + rect.point2.x + ',' + rect.point2.y + "> <" + rect.point3.x + ',' + rect.point3.y + "> <" + rect.point4.x + ',' + rect.point4.y + ">");
  state.objects.push(rect);
}

function createTriangle() {
  const point1 = state.clicks.pop();
	const point2 = state.clicks.pop();
	const point3 = state.clicks.pop();
  const triangle = new Triangle(point1, point2, point3)
  console.log("Create Triangle <" + triangle.point1.x + ',' + triangle.point1.y + "> <" + triangle.point2.x + ',' + triangle.point2.y + "> <" + triangle.point3.x + ',' + triangle.point3.y + ">");
  state.objects.push(triangle);
}
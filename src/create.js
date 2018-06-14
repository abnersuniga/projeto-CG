function createLine() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const line = new Line(point1, point2)
  state.objects.push(line);
}

function createCircle() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const circle = new Circle(point1, point2)
  state.objects.push(circle);
}

function createRect() {
  const point1 = state.clicks.pop();
  const point2 = state.clicks.pop();
  const rect = new Rect(point1, point2)
  state.objects.push(rect);
}

function createTriangle() {
  const point1 = state.clicks.pop();
	const point2 = state.clicks.pop();
	const point3 = state.clicks.pop();
  const triangle = new Triangle(point1, point2, point3)
  state.objects.push(triangle);
}
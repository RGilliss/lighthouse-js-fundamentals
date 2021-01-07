const calculateRectangleArea = function (length, width) {
  if(length <= 0 || width <= 0){
    rectangle = "undefined";
  } else {
  let rectangle = length * width;
  return rectangle;
  }
}

const calculateTriangleArea = function (base, height) {
  if(base <= 0 || height <= 0){
    triangle = "undefined";
  }else {
  let triangle = (base * height) / 2;
  return triangle;
  }
}

const calculateCircleArea = function (radius) {
  if(radius < 0){
    circle = "undefined";
  } else {
  let circle = Math.PI * (radius * radius);
  return circle;
  }
}



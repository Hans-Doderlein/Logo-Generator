const Square = require("../classes/square");
const Triangle = require("../classes/triangle");
const Circle = require("../classes/circle");

//uses user input to create new shape from construct
function createSVG({ text, textColor, shape, shapeColor }) {
  let logo;

  //if shape chosen is a square, creates a new square
  if (shape === "Square") {
    logo = new Square(text, textColor, shapeColor);
  }

  //if shape chosen is circle, creartes a new circle
  if (shape === "Circle") {
    logo = new Circle(text, textColor, shapeColor);
  }

  //if shape chosen is triangle, creates a new triangle
  if (shape === "Triangle") {
    logo = new Triangle(text, textColor, shapeColor);
  }

  return logo;
}

module.exports = createSVG;

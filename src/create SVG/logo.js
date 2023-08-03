const Square = require("../classes/square");
const Triangle = require("../classes/triangle");
const Circle = require("../classes/circle");

function createSVG({ text, textColor, shape, shapeColor }) {
  // use classes here
  let logo;

  if (shape === "Square") {
    logo = new Square(text, textColor, shapeColor);
  }

  if (shape === "Circle") {
    logo = new Circle(text, textColor, shapeColor);
  }

  if (shape === "Triangle") {
    logo = new Triangle(text, textColor, shapeColor);
  }

  return logo;
}

module.exports = createSVG;

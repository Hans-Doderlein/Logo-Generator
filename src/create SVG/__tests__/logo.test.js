const createSVG = require("../logo");
const Square = require("../../classes/square");
const Triangle = require("../../classes/triangle");
const Circle = require("../../classes/circle");

describe("logo.js", () => {
  //tests if a new square is constructed when called
  it("should return constructor of type square", () => {
    const mockShape = "Square";
    const svgData = {
      text: "",
      textColor: "",
      shape: mockShape,
      shapeColor: "",
    };
    const result = createSVG(svgData);
    expect(result).toBeInstanceOf(Square);
  });

  //tests if new circle is constructed when called
  it("should return constructor of type circle", () => {
    const mockShape = "Circle";
    const svgData = {
      text: "",
      textColor: "",
      shape: mockShape,
      shapeColor: "",
    };
    const result = createSVG(svgData);
    expect(result).toBeInstanceOf(Circle);
  });

  //tests if new triangle is constructed when called
  it("should return constructor of type triangle", () => {
    const mockShape = "Triangle";
    const svgData = {
      text: "",
      textColor: "",
      shape: mockShape,
      shapeColor: "",
    };
    const result = createSVG(svgData);
    expect(result).toBeInstanceOf(Triangle);
  });
});

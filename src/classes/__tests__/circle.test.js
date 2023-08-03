const Circle = require("../circle");

describe("shape.js", () => {
  it("should return a string with correctly input values when render() is called", () => {
    //mock text sizing for testing purposes
    const mockText = {
      textSize: 40,
      textX: 150,
      textY: 110,
    };
    //mock user input done for testing purposes
    const mockChar = "HND";
    const mockTextColor = "Yellow";
    const mockShapeColor = "Red";

    //create a new circle, inputing the mock info
    const shape = new Circle(mockChar, mockTextColor, mockShapeColor);

    //mock circle scg content
    const mockCircle = `<circle cx="150" cy="100" r="80" fill="${mockShapeColor}"/>`;

    //mock return on render
    const mockSVGFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${mockCircle}
<text x="${mockText.textX}" y="${mockText.textY}" font-size="${mockText.textSize}" text-anchor="middle" fill="${mockTextColor}">${mockChar}</text>
</svg>`;

    //test done on render funcion
    expect(shape.render(mockCircle, mockText)).toBe(mockSVGFile);
  });
});

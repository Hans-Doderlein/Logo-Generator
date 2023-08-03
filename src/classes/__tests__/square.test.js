const Square = require("../square");

describe("square.js", () => {
  it("should return a string with correctly input values when render() is called", () => {
    //mock text info
    const mockText = {
      textSize: 40,
      textX: 85,
      textY: 100,
    };

    //mock user input
    const mockChar = "HND";
    const mockTextColor = "Yellow";
    const mockShapeColor = "Red";

    //create a new square
    const shape = new Square(mockChar, mockTextColor, mockShapeColor);

    //mock square scg info
    const mockSquare = `<rect x="10" y="10" width="150" height="150" fill="${mockShapeColor}" />`;

    //mock return string
    const mockSVGFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${mockSquare}
<text x="${mockText.textX}" y="${mockText.textY}" font-size="${mockText.textSize}" text-anchor="middle" fill="${mockTextColor}">${mockChar}</text>
</svg>`;

    //test render function
    expect(shape.render(mockSquare, mockText)).toBe(mockSVGFile);
  });
});

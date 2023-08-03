const Circle = require("../circle");

describe("shape.js", () => {
  it("should return a string with correctly input values when render() is called", () => {
    const mockText = {
      textSize: 40,
      textX: 150,
      textY: 110,
    };

    const mockChar = "HND";
    const mockTextColor = "Yellow";
    const mockShapeColor = "Red";

    const shape = new Circle(mockChar, mockTextColor, mockShapeColor);

    const mockCircle = `<circle cx="150" cy="100" r="80" fill="${mockShapeColor}"/>`;

    const mockSVGFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${mockCircle}
<text x="${mockText.textX}" y="${mockText.textY}" font-size="${mockText.textSize}" text-anchor="middle" fill="${mockTextColor}">${mockChar}</text>
</svg>`;

    expect(shape.render(mockCircle, mockText)).toBe(mockSVGFile);
  });
});

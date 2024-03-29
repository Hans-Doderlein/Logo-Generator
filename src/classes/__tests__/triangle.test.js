const Triangle = require("../triangle");

describe("triangle.js", () => {
  it("should return a string with correctly input values when render() is called", () => {
    //mock text info
    const mockText = {
      textSize: 20,
      textX: 50,
      textY: 80,
    };

    //mock user input
    const mockChar = "HND";
    const mockTextColor = "Yellow";
    const mockShapeColor = "Red";

    //create new triangle
    const shape = new Triangle(mockChar, mockTextColor, mockShapeColor);

    //mock triangle svg content
    const mockTriangle = `<polygon points="50,10 20,90 80,90" fill="${mockShapeColor}" />`;

    //mock return string
    const mockSVGFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${mockTriangle}
<text x="${mockText.textX}" y="${mockText.textY}" font-size="${mockText.textSize}" text-anchor="middle" fill="${mockTextColor}">${mockChar}</text>
</svg>`;

    //test render function
    expect(shape.render(mockTriangle, mockText)).toBe(mockSVGFile);
  });
});

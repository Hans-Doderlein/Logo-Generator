const Shape = require("../shape");

describe("shape.js", () => {
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

    //create a new shape with mock info
    const shape = new Shape("HND", "Yellow", "Red");

    //mock triangle svg content
    const mockShape = `<polygon points="50,10 20,90 80,90" fill="${mockShapeColor}" />`;

    //mock return string
    const mockSVGFile = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${mockShape}
<text x="${mockText.textX}" y="${mockText.textY}" font-size="${mockText.textSize}" text-anchor="middle" fill="${mockTextColor}">${mockChar}</text>
</svg>`;

    //test on render function
    expect(shape.render(mockShape, mockText)).toBe(mockSVGFile);
  });
});

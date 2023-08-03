//parent shape contructor
class Shape {
  //basic argument and assignments
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  //returns the svg template
  render(shapeXML, { textSize, textX, textY }) {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
${shapeXML}
<text x="${textX}" y="${textY}" font-size="${textSize}" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
  }
}

module.exports = Shape;

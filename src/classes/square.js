const Shape = require("./shape");

class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  createXML() {
    return `<rect x="10" y="10" width="150" height="150" fill="${this.shapeColor}" />`;
  }
  render() {
    const text = {
      textSize: 40,
      textX: 85,
      textY: 100,
    };

    return super.render(this.createXML(), text);
  }
}

module.exports = Square;

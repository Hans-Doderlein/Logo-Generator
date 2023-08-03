const Shape = require("./shape");

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  createXML() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }
  render() {
    const text = {
      textSize: 40,
      textX: 150,
      textY: 110,
    };

    return super.render(this.createXML(), text);
  }
}

module.exports = Circle;

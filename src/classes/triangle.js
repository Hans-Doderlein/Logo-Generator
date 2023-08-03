const Shape = require("./shape");

class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  createXML() {
    return `<polygon points="50,10 20,90 80,90" fill="${this.shapeColor}" />`;
  }

  render() {
    const text = {
      textSize: 20,
      textX: 50,
      textY: 80,
    };

    return super.render(this.createXML(), text);
  }
}

module.exports = Triangle;

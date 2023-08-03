const Shape = require("./shape");

//Triangle constructor that biilds on shape construct
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  //returns triangle svg content
  createXML() {
    return `<polygon points="50,10 20,90 80,90" fill="${this.shapeColor}" />`;
  }

  //returns the final svg string for the file write
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

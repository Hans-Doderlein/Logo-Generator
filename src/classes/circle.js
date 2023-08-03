const Shape = require("./shape");

//circle construct that builds of of shape contruct
class Circle extends Shape {
  //takes in all the user input and uses the parent functionality for the super arguments
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }

  //returns the svg content for circle
  createXML() {
    return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
  }

  //returns the final svg string for the svg file
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

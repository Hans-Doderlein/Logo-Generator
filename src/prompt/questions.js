const colors = ["red", "blue", "orange", "green", "yellow", "purple"];

function handleColor() {
  return (color) => {
    if (!colors.includes(color.toLowerCase())) {
      if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
        return true;
      } else {
        return "Please enter a valid basic color or hex color";
      }
    } else {
      return true;
    }
  };
}

function checkText() {
  return (input) => {
    if (input.length > 3) {
      return "Please enter logo text 3 characters or less";
    }
    return true;
  };
}

const questions = [
  {
    name: "text",
    message: "What text would you like on the logo?(3 Characters MAX)",
    type: "input",
    validate: checkText(),
  },
  {
    name: "textColor",
    message:
      "What color would you like for the logo text? (Please enter a basic color (roygbp) or hexadecimal color)",
    type: "input",
    validate: handleColor(),
  },
  {
    name: "shape",
    message: "What shape would you like the logo?",
    type: "list",
    choices: ["Square", "Triangle", "Circle"],
  },
  {
    name: "shapeColor",
    message:
      "What color would you like for the shape of the logo? (Please enter a basic color (roygbp) or hexadecimal color)",
    type: "input",
    validate: handleColor(),
  },
];

module.exports = {
  questions,
  checkText,
  handleColor,
};

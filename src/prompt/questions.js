const colors = ["red", "blue", "orange", "green", "yellow", "purple"];

function handleColor() {
  return (color) => {
    //checks if input color is an accepted basic color
    if (!colors.includes(color.toLowerCase())) {
      //check for valid hexadecimal color code
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
    //checks that logo text length is less than or equal to three characters
    if (input.length > 3) {
      return "Please enter logo text 3 characters or less";
    }
    return true;
  };
}

//questions array for prompt
const questions = [
  {
    name: "text",
    message: "What text would you like on the logo?(3 Characters MAX)",
    type: "input",

    //validates text length
    validate: checkText(),
  },
  {
    name: "textColor",
    message:
      "What color would you like for the logo text? (Please enter a basic color (roygbp) or hexadecimal color)",
    type: "input",

    //validates text color
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

    //validates shape color
    validate: handleColor(),
  },
];

module.exports = {
  questions,
  checkText,
  handleColor,
};

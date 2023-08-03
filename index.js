const { startPrompt } = require("./src/prompt/prompt");
const createSVG = require("./src/create SVG/logo");
const writeSVGFile = require("./src/create SVG/writeSVGFile");

// get user answers
startPrompt((response) => {
  // takes response from prompts and applies it to createSVG function
  const svgData = createSVG(response);

  // create SCG file using resposne data
  const sucess = writeSVGFile(svgData.render());

  if (sucess) {
    console.log("Generated logo.svg");
  } else {
    console.log("Error generating file!");
  }
});

const fs = require("fs");
const path = require("path");

//write svg file to dist folder
function writeSVGFile(data) {
  //file path for write file
  const filePath = path.join(__dirname, "..", "..", "dist", "logo.svg");

  try {
    //if file is written successfully, return true
    fs.writeFileSync(filePath, data, { encoding: "utf-8" });
    return true;
  } catch (e) {
    //if file fails to write, return false
    return false;
  }
}
module.exports = writeSVGFile;

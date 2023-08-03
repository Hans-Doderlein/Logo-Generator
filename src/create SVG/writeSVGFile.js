const fs = require("fs");
const path = require("path");

function writeSVGFile(data) {
  const filePath = path.join(__dirname, "..", "..", "dist", "logo.svg");

  try {
    fs.writeFileSync(filePath, data, { encoding: "utf-8" });
    return true;
  } catch (e) {
    return false;
  }
}
module.exports = writeSVGFile;

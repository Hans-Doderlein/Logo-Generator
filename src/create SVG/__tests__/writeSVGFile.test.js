const fs = require("fs");
const writeSVGFile = require("../writeSVGFile");

describe("writeSVGFile.js", () => {
  //tests if file will be written given a success
  it("should return true if an SVG file was created", () => {
    jest.spyOn(fs, "writeFileSync").mockReturnValue();

    const result = writeSVGFile("");

    expect(result).toBe(true);
  });

  //tests if an error message wil be displayed if file write fails
  it("should return false if an SVG file was not created", () => {
    jest.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("failed");
    });

    let result;

    //tests for failed file write
    try {
      result = writeSVGFile("");
    } catch (e) {
      expect(result).toBe(false);
    }
  });
});

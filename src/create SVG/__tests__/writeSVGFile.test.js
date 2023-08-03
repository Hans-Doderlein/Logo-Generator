const fs = require("fs");
const writeSVGFile = require("../writeSVGFile");

describe("writeSVGFile.js", () => {
  it("should return true if an SVG file was created", () => {
    jest.spyOn(fs, "writeFileSync").mockReturnValue();

    const result = writeSVGFile("");

    expect(result).toBe(true);
  });

  it("should return false if an SVG file was not created", () => {
    jest.spyOn(fs, "writeFileSync").mockImplementation(() => {
      throw new Error("failed");
    });

    let result;

    try {
      result = writeSVGFile("");
    } catch (e) {
      expect(result).toBe(false);
    }
  });
});

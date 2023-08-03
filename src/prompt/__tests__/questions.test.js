const { handleColor, checkText } = require("../questions");

describe("questions.js", () => {
  describe("handleColor", () => {
    it("should validate color", () => {
      const validColor = "yellow";

      const checkColor = handleColor()(validColor);

      expect(checkColor).toBe(true);
    });
    it("should validate color", () => {
      const validColor = "#3456fd";

      const checkColor = handleColor()(validColor);

      expect(checkColor).toBe(true);
    });
    it("should validate color", () => {
      const invalidColor = "aqumarine";
      const errorMessage = "Please enter a valid basic color or hex color";
      const checkColor = handleColor()(invalidColor);

      expect(checkColor).toBe(errorMessage);
    });
  });
  describe("checkText", () => {
    it("should validate text", () => {
      const validText = "HND";

      const validateText = checkText()(validText);

      expect(validateText).toBe(true);
    });
    it("should validate text", () => {
      const invalidText = "Hzv sdvswddsND";

      const validateText = checkText()(invalidText);

      const errorMessage = "Please enter logo text 3 characters or less";

      expect(validateText).toBe(errorMessage);
    });
  });
});

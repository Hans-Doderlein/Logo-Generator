const { handleColor, checkText } = require("../questions");

describe("questions.js", () => {
  describe("handleColor", () => {
    it("should validate color", () => {
      //mock valid basic color
      const validColor = "yellow";

      //saves response from the handleColor function
      const checkColor = handleColor()(validColor);

      //checks that when given a valid color, the function responds with true
      expect(checkColor).toBe(true);
    });

    it("should validate color", () => {
      //mock hex color code
      const validColor = "#3456fd";

      //save response from inputting valid hex color code
      const checkColor = handleColor()(validColor);

      //checks that valid hex code returns true
      expect(checkColor).toBe(true);
    });
    it("should validate color", () => {
      //mock invalid color
      const invalidColor = "aqumarine";

      //expected error message
      const errorMessage = "Please enter a valid basic color or hex color";

      //saves response from function with invalid color entered
      const checkColor = handleColor()(invalidColor);

      //checks invalid color returns with error message
      expect(checkColor).toBe(errorMessage);
    });
  });
  describe("checkText", () => {
    it("should validate text", () => {
      //mock valid user text
      const validText = "HND";

      //saves response when given valid text
      const validateText = checkText()(validText);

      //checks for a response of true
      expect(validateText).toBe(true);
    });
    it("should validate text", () => {
      //mock invalid color
      const invalidText = "Hzv sdvswddsND";

      //saves resposne from invalid color
      const validateText = checkText()(invalidText);

      //expected error message
      const errorMessage = "Please enter logo text 3 characters or less";

      //checks for error message on invalid color input
      expect(validateText).toBe(errorMessage);
    });
  });
});

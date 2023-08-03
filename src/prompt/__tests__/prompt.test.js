const inquirer = require("inquirer");
const { startPrompt } = require("../prompt");

describe("prompt.js", () => {
  it("should handle response", async () => {
    const mockHandleResponse = jest.fn();
    const mockResponse = {};

    jest.spyOn(inquirer, "prompt").mockResolvedValue(mockResponse);

    await startPrompt(mockHandleResponse);

    expect(mockHandleResponse).toHaveBeenCalledWith(mockResponse);
  });
});

const inquirer = require("inquirer");
const { startPrompt } = require("../prompt");

describe("prompt.js", () => {
  it("should handle response", async () => {
    //mock return function
    const mockHandleResponse = jest.fn();

    //mock prompt response
    const mockResponse = {};

    //pretends to run prompt, with a mock response object
    jest.spyOn(inquirer, "prompt").mockResolvedValue(mockResponse);

    await startPrompt(mockHandleResponse);

    //tests if the mock function is called with the mock response object
    expect(mockHandleResponse).toHaveBeenCalledWith(mockResponse);
  });
});

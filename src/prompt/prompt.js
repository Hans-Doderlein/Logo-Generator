const { questions } = require("./questions");
const inquirer = require("inquirer");

//asynchronous function that prompts questions and stores response
async function startPrompt(handleResponse) {
  //saves the response from the prompt
  const response = await inquirer.prompt(questions);

  //runs handleResponse, with the response as an argument
  handleResponse(response);
}

module.exports = {
  startPrompt,
};

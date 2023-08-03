const { questions } = require("./questions");
const inquirer = require("inquirer");

async function startPrompt(handleResponse) {
  const response = await inquirer.prompt(questions);
  handleResponse(response);
}

module.exports = {
  startPrompt,
};

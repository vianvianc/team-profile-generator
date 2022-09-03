const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require;

inquirer
  .prompt([
    {
      type: "input",
      message: "Team members name: ",
      name: "name",
    },
    {
      type: "input",
      message: "Team members email: ",
      name: "email",
    },
    {
      type: "input",
      message: "Team members gitHub: ",
      name: "gitHub",
    },
    {
      type: "input",
      message: "Employees ID:",
      name: "id",
    },
    {
      type: "input",
      message: "Employees ofice number: ",
      name: "office",
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log("Success!")
      : console.log("You forgot your password already?!")
  );

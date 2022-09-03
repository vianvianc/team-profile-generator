const fs = require("fs");
const path = require("path");
const pathDir = path.resolve(__dirname, "cards");
const createFile = path.join(pathDir, "index.html");
const inquirer = require("inquirer");
const Manager = require("./src/Manager");
const Engineer = require("./src/Engineer");
const Intern = require("./src/Intern");
const createHtml = require("./src/createHtml");
const team = [];

const classPrompt = [
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
    type: "list",
    message: "Team members position: ",
    name: "position",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Team members ID: ",
    name: "id",
  },
];

function inquirePrompt() {
  inquirer.prompt(classPrompt).then((res) => {
    if (res.position === "Manager") {
      const managerId = res.id;
      const managerEmail = res.email;
      const managerName = res.name;
      inquirer
        .prompt([
          {
            type: "input",
            name: "office",
            message: "Office Number: ",
          },
        ])
        .then((managerRes) => {
          const newManager = new Manager(
            managerName,
            managerId,
            managerEmail,
            managerRes.office
          );
          team.push(newManager);
          console.log(team);
          addOrCreate();
        });
    }
    if (res.position === "Engineer") {
      const engineerId = res.id;
      const engineerEmail = res.email;
      const engineerName = res.name;
      inquirer
        .prompt([
          {
            type: "input",
            name: "gitHub",
            message: "What is your gitHub?",
          },
        ])
        .then((engineerRes) => {
          const newEngineer = new Engineer(
            engineerName,
            engineerId,
            engineerEmail,
            engineerRes.gitHub
          );
          team.push(newEngineer);
          console.log(team);
          addOrCreate();
        });
    }
    if (res.position === "Intern") {
      const internId = res.id;
      const internEmail = res.email;
      const internName = res.name;
      inquirer
        .propmt([
          {
            type: "input",
            name: "school",
            message: "What school does Intern attend?",
          },
        ])
        .then((internRes) => {
          const newIntern = new Intern(
            internName,
            internId,
            internEmail,
            internRes.school
          );
          team.push(newEnginer);
          console.log(team);
          addOrCreate();
        });
    }
  });
}

const addAnother = [
  {
    type: "list",
    message: "Add another Employee?",
    name: "add",
    choices: ["yes", "no"],
  },
];

function addOrCreate() {
  inquirer.prompt(addAnother).then((res) => {
    if (res.add === "yes") {
      inquirePrompt();
    }
    if (res.add === "no") {
      displayHtml();
    }
  });
}
inquirePrompt();

function displayHtml() {
  //fs.writeFileSync( file, data, options )
  fs.writeFileSync(createFile, createHtml(team), "utf-8");
}

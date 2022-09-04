const Employee = require("./Employee");
//engineer is a subclass of the parent employee class
class Engineer extends Employee {
  constructor(name, id, email, gitHub) {
    super(name, id, email);
    this.gitHub = gitHub;
  }
  getGitHub() {
    return this.gitHub;
  }
  getPosition() {
    return "Engineer";
  }
}
module.exports = Engineer;

const Engineer = require("../src/Engineer");

describe("Tests for the instantiation of the engineer class", () => {
  it("should have gitHub property", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const gitHub = "vianvianc";
    const employee = new Engineer(name, id, email, gitHub);
    expect(employee.gitHub).toEqual(gitHub);
  });
  it("should return gitHub property when getGitHub method called", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const gitHub = "vianvianc";
    const employee = new Engineer(name, id, email, gitHub);
    expect(employee.getGitHub()).toEqual(gitHub);
  });
  it("should return position of 'Manager' when getPosition method called", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const gitHub = "vianvianc";
    const employee = new Engineer(name, id, email, gitHub);
    expect(employee.getPostion()).toEqual("Engineer");
  });
});

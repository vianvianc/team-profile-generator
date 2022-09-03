const Intern = require("../src/Intern");

describe("Tests for the instantiation of the intern subclass", () => {
  it("should have a school property", () => {
    const name = "vian c";
    const id = 987;
    const email = "vian@mail.com";
    const school = Yale;
    const employee = new Manager(name, id, email, school);
    expect(employee.school).toEqual(school);
  });
  it("should return school property when getSchool method called", () => {
    const name = "vian";
    const id = 987;
    const email = "vian@mail.com";
    const school = Yale;
    const employee = new Intern(name, id, email, school);
    expect(employee.getSchool()).toEqual(school);
  });
  it("should return position of 'Intern' when getPosition method called", () => {
    const name = "vian";
    const id = 987;
    const email = "vian@mail.com";
    const office = 12;
    const employee = new Intern(name, id, email, school);
    expect(employee.getPostion()).toEqual("Intern");
  });
});

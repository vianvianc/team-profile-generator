const Manager = require("../src/Manager");

describe("Tests for the instantiation of the manager class", () => {
  it("should have office property", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const office = 12;
    const employee = new Manager(name, id, email, office);
    expect(employee.office).toEqual(office);
  });
  it("should return office property when getOffice method called", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const office = 12;
    const employee = new Manager(name, id, email, office);
    expect(employee.getOffice()).toEqual(office);
  });
  it("should return position of 'Manager' when getPosition method called", () => {
    const name = "vian";
    const id = 321;
    const email = "vian@mail.com";
    const office = 12;
    const employee = new Manager(name, id, email, office);
    expect(employee.getPostion()).toEqual("Manager");
  });
});

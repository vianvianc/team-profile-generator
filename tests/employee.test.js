const Employee = require("../src/Employee");

describe("Tests for the instantiation of the employee super class", () => {
  it("should create an employee object", () => {
    const employee = new Employee();

    expect(typeof employee).toBe("object");
  });

  it("should have a name property", () => {
    const name = "vian";
    const id = 999;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.name).toEqual(name);
  });
  it("should have an ID property", () => {
    const name = "vian";
    const id = 999;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.id).toEqual(id);
  });
  it("should have an email property", () => {
    const name = "vian";
    const id = 999;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.email).toEqual(email);
  });
  it("should return the name property when getName method is called", () => {
    const name = "vian";
    const id = 10;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(name);
  });
  it("should return the id oproperty when getId method is called", () => {
    const name = "vian";
    const id = 10;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(name);
  });
  it("should return the email property when getEmail method is called", () => {
    const name = "Vian";
    const id = 10;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.getName()).toEqual(name);
  });
  it("should return 'Employee' when getPosition method is called", () => {
    const name = "Vian";
    const id = 10;
    const email = "vian@mail.com";
    const employee = new Employee(name, id, email);
    expect(employee.getPosition()).toEqual("Employee");
  });
});

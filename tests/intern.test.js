const Intern = require("../src/Intern");

describe("Tests for the instantiation of the intern subclass", () => {
  test("tests that school property in generated", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.school).toBe(testValue);
  });

  test("getSchool() should return Yale", () => {
    const testValue = "Yale";
    const e = new Intern("Foo", 1, "test@test.com", "Yale");
    expect(e.getSchool()).toBe(testValue);
  });

  test('getPosition() should return "Intern"', () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA");
    expect(e.getPosition()).toBe(testValue);
  });
});

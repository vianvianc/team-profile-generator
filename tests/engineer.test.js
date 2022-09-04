const Engineer = require("../src/Engineer");

describe("Tests for the instantiation of the engineer class", () => {
  test("tests that the gitHub property generated", () => {
    const testValue = "testGitHub";
    const e = new Engineer("Foo", 1, "test@mail.com", "testGitHub");
    expect(e.gitHub).toBe(testValue);
  });
  test('getGitHub() should return "testGitHub"', () => {
    const testValue = "testGitHub";
    const e = new Engineer("Foo", 1, "test@mail.com", "testGitHub");
    expect(e.getGitHub()).toBe(testValue);
  });
  test('getPosition() should return "Engineer"', () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "test@mail.com", "testgitHub");
    expect(e.getPosition()).toBe(testValue);
  });
});

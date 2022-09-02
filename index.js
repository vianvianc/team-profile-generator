








class Empolyees extends Users {


  constructor(name, email, gitHub) {
    super(name, email);//calls the constructor function of that parent class
    this.gitHub;
  }
  getGrade() {
    console.log(`this employees gitHub is ${this.gitHub}`);
  }
}
const Employee1
class Human {
  constructor() {
    gender = "Male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends {
  constructor() {
    super();
    this.name = "Fernando";
    this.gender = "Female"
  }

  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

printMyName = () => {
  console.log(this.name);
}

// defining the classes is to reuse the code
// building blocks
// Create classes on blue prints
class Person {
  //Generic construct to recreate instantes of it called impicitly
  constructor(name = "Anonymous", age = 0) {
    // data render
    this.name = name;
    this.age = age;
  }
  //methods
  getGreeting() {
    return `Hi  I am ${this.name}!  and his age was ${this.age}`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // calling parent constructor function
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getGreeting() {
    let description = super.getGreeting();
    if (this.hasMajor) {
      description += `thier major is ${this.major}`;
    }
  }
}
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += `I am Visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}
// through this each person can be defines on it
const me = new Traveler("Srinivas", 23, "Electornics scinces");
console.log(me.getGreeting());
const other = new Traveler(undefined, undefined, "NOwhere");
console.log(other.getGreeting());

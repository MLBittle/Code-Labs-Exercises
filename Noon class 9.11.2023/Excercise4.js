// Objective: Familiarize with static methods in classes.

//Instructions:

//Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
//Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  sayAge() {
    console.log(`I am ${this.age} years old`);
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  static info() {
    console.log("This is the Person class");
  }
}

Person.info(); // "This is the Person class"

const person = new Person("John Doe", 30);

Person.info(); // "This is the Person class"

person.info(); // TypeError: person.info is not a function.


// static info cannot be accessed from an instance of the class.

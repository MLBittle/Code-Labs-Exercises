// Delve into Object-Oriented Programming by creating and interacting with classes.

//Instructions:

//Define a Person class with properties name and age.
//Add a method greet() to this class which outputs a greeting.
//Instantiate two different Person objects and invoke their greet methods.


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
}

const person = new Person("John Doe", 30);

person.greet(); // "Hello, John Doe!"


const person1 = new Person("Paul Jones", 56);
const person2 = new Person("Jane Jones", 45);

person1.greet(); // "Hello, John Jones!"
person2.greet(); // "Hello, Jane Jones!"

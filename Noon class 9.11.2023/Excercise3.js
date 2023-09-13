//Objective: Understand the role of constructor methods within classes.

//Instructions:

//Modify your Person class. The constructor should now accept and initialize name and age properties.
//Create two different Person instances with unique names and ages.


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

const person3 = new Person("Randy Cox", 14);

person3.sayName(); // "My name is Randy Cox"

person3.sayAge(); // "I am 14 years old"

const person4 = new Person("Amy Stark", 17);

person4.sayName(); // "My name is Amy Stark"

person4.sayAge(); // "I am 17 years old"
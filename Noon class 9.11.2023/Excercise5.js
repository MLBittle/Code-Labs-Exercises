//Objective: Implement getters and setters for class properties.

//Instructions:

//Within your Person class, add getters and setters for the age property.
//Ensure with the setter that age can't be set to a negative value.
//Instantiate a Person object, try setting a negative age, and observe the results.


class Person {

constructor(name, age) {
  name: "",
  age: "",
  get age() {
      return this._age;
  },
  set age(value) {
      if (typeof value !== "number" || value < 0) {
          throw new Error("Age must be a positive number");
      }
      this._age = value;
  },
};
}
person.age = 25;
console.log(person.age); // 25

person.age = -5


// person.age = -10; // throws an error: 
//"Age must be a positive number"


// This doesn't quite work yet, and neither did 2 others I tried. Will return to this one later.
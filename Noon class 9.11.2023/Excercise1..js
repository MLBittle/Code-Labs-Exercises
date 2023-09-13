// Understand the keyword 'this' in different contexts. Create 3 functions (global, object method, and arrow function inside and object)

// Global function of this.

console.log("'this' in Global Scope:", this); // returns 'this' in Global Scope: Window

// Object Method

function myCat() {
  console.log("'this' in Explicit Scope:", this.name);
};

const cat = {
name: 'Jolene',
color: 'tortoiseshell'
};

myCat.call(cat);  // returns 'this' in Explicit Scope: Jolene


// Arrow functions

const myFunction = () => {
  console.log(this)
};

name: 'Jolene',


this.name = name

console.log(myCat)  // this returnd ƒ myCat() {  console.log("'this' in Explicit Scope:", this.name);} Not what I wanted, so I will study this more.


const person = {
 
  sayName: () => {
    console.log(`My name is ${this.name}`);
  },
};
 name: "John Doe",
person.sayName(); // returned this "My name is". No name added to the end.

// how 'this' is returned depends upon what "this" is being called out. Or how it is used in an object. 

// Arrow functions are hard for me to figure out. I know that "this" in an arrow function has to look to a parent or global scope to find the "this". I don't think I will use arrow functions very often.

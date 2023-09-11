// Declare a global variable here
var dogBreed = "Collie";

function modifyGlobal() {
  // Try to modify the global variable here
let dogBreed = "Boxer"; {
  console.log(dogBreed)
  }
}

console.log(dogBreed);  //did not work. Collie was returned.

function localScopeTest() {
  // Declare a local variable with the same name as the global variable

const dogBreed = "Collie";

console.log("My dog is a" + dogBreed);
 
}

// Call both functions here


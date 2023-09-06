let game = "Sonic";  //global variable

console.log(game);

function title() {
  console.log((game));
}


title();

if(true) {
  console.log((game));
}


function a() {
  let game = "Sonic";  //local variable functional scope
  console.log(game);
}

if(true) {
  let game = "Mario";
  console.log(game);
}

if(true) {
  var greeting = "hello";
}

console.log(greeting);


var x = 10;
console.log (x);

if(true) {
  var x = 2;
  console.log(x);
}

console.log(x);



let x = 10;
console.log(x);

if(true) {
  let x = 2;
  console.log(x);
}
console.log(x);




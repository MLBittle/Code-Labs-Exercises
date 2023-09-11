class Player {
  age = 20;
constructor(name, hp, mp, items) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
  }

  speak(phrase)
  console.log(`${this.name} says: ${phrase}`);

}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.speak("Never tell me the odds.");
hanSolo.age = 50
console.log(hanSolo);

console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo_proto_));



function AnotherPlayer(name, hp, mp, items) {  
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
   }
}

AnotherPlayer.prototype.speak = function (phrase) {
  console.console.log(`${this.name} says: ${phrase}`);   
} {
 

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
darthVader.speak("Hshfsfiihhhhhh")
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader_proto_));
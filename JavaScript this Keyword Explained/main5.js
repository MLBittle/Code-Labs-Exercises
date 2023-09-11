function User(name) 
{
 this.name = name;
 console.log(this); 
}

const devsage = new User("DevSage");  //the new causes this to reference the new object just created.
const codingphase = new User("CodingPhase");
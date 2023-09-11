const user = {
  firstName: "Patrick",
  lastName: "Scott",
  hobbies: ["programming", "piano"],
  listHobbies: function()
  {
this.hobbies.forEach(function(hobby) {
  console.log(this.firstName)
  console.log(hobby)
}, this); 
 }
  } 

  user.listHobbies();

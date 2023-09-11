const user = {
  firstName: "Patrick",
  lastName: "Scott",
  fullName: function(){
    console.log(this)
    console.log(this.firstName + " " +this.lastName)
  }
}

user.fullName(); //user refers to the const user object. 
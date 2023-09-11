const user = {
  firstName: "Patrick",
  lastName: "Scott",
  fullName: function() => { //arrow funcitons do not have their own this scope. It will inherit the this scope of the closest regular funciton. In this case, the window function.
    console.log(this)
    console.log(this.firstName + " " +this.lastName)
  }
}

user.fullName();


const user = {
  firstName: "Patrick",
  lastName: "Scott",
  fullName: function() { 

    const arrowFunction = () => {
      console.log(this)
      console.log(this.firstName + " " +this.lastName)
    }
    arrowFunction();  
  }
}

user.fullName();
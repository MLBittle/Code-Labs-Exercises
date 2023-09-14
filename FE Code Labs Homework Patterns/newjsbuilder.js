class Address {
  constructor(zip, street) {
  this.zip = zip  
  this.street = street
 }
}

class User { 
  constructor(name, { age, phone = '417-111-1111', address } = {}) {
      this.name = name
      this.age = age
      this.phone = phone
      this.address = address
  }
}

let user = new User('Bob', {age: 10, address: new Address('11111', 'Main')})
console.log(user)


const User = require("./28_myUserClass");

class Admin extends User {
  constructor(firstName, lastName, age, role = "administrateur") {
    super(firstName, lastName, age);
    this.role = role;
  }
}

module.exports = Admin;

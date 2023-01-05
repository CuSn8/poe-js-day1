class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  presentation() {
    return `Je m'apelle ${this.firstName} ${this.lastName}, j'ai ${this.age} ans`;
  }
}

module.exports = User;

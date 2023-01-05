function myObjectFilter(userArray) {
  return userArray
    .filter((user) => user.age >= 18)
    .map((user) => user.surname + " " + user.name);
}

console.log(myObjectFilter([ 
  {name: "A", surname: "a", age: 12}, 
  {name: "B", surname: "b", age: 30},
  {name: "C", surname: "c", age: 30} 
]));

module.exports = myObjectFilter;

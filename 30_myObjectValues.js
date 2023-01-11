function myObjectValues(object) {
  const entries = Object.entries(object);
  const result = entries
    .filter((entry) => typeof entry[1] !== "function" && typeof entry[1] !== "object")
    .map((entry) => entry.join(": "))
    .join(", ");
  return result;
}

console.log(myObjectValues({name: "Ganster", surname: "Guilian", age: 24, presentation: () => {}})); // "name: Ganster, surname: Guilian, age: 24"

module.exports = myObjectValues;
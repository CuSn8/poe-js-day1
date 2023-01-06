function myObjectValues(object) {
  const entries = Object.entries(object);
  const result = entries
    .filter((entry) => typeof entry[1] !== "function")
    .map((entry) => entry.join(": "))
    .join(", ");
  return result;
}

module.exports = myObjectValues;
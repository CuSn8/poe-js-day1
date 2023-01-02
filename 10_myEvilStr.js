function main(string) {
  let resultArray = [];
  for (let i = string.length - 1; i >= 0; i--) {
    resultArray.push(string[i]);
  }
  return resultArray.join("");
}
module.exports = main;

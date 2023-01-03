function main(string, num) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(string[i]);
  }
  return result.join("");
}
module.exports = main;

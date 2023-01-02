// exponents are all integers
function main(num, pow) {
  let result = num;
  if (pow > 1) {
    for (let i = 1; i < pow; i++) {
      result *= num;
    }
    return result;
  } else if (pow < -1) {
    for (let i = -1; i > pow; i--) {
      result *= num;
    }
    return 1 / result;
  } else if (pow === 1) {
    return result;
  } else if (pow === -1) {
    return 1 / result;
  }
  return 1;
}
console.log("test : ", main(3, 1));
module.exports = main;

// exponents are all integers
function main(num, pow) {
  if (pow > 1) {
    for (let i = 1; i < pow; i++) {
      num *= num;
    }
    return num;
  } else if (pow < 0) {
    for(let i = 0; i > pow; i--) {
    num /= num;
    }
    return num;
  } else if()
}
module.exports = main;

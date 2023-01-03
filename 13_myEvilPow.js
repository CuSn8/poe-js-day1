function main(num, pow) {
  if (pow === 0) return 1;
  if (pow > 0) {
    return num * main(num, pow - 1);
  } else if (pow < 0) {
    return (1 / num) * main(num, pow + 1);
  }
}

module.exports = main;

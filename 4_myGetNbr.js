function main(num) {
  if (num > 0) {
    return "+";
  } else if (num === 0) {
    return "0";
  }
  return "-";
}
module.exports = main;

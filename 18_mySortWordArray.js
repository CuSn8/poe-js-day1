function main(string) {
  if (string.length) {
    return string.split(" ").sort();
  } else {
    return [];
  }
}

module.exports = main;

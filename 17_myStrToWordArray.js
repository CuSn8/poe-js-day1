function main(string) {
  if (string.length) {
    return string.split(" ");
  } else {
    return [];
  }
}

module.exports = main;

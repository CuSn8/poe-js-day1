function main(array, itemToRemove) {
  array.splice(itemToRemove, 1);
  return array;
}

module.exports = main;

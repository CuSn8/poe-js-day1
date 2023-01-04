function buildFirstBlock(numberOfLines) {
  let block = [];
  for (let i = 1; i <= numberOfLines; i++) {
    let row = [];
    for (let j = numberOfLines - i; j > 0; j--) {
        console.log("j = ", j)
      row.push(" ");
    }
    for (let k = 1; k <= i; k += 0.5) {
      row.push("*");
    }
    console.log(row);
    block.push(row);
  }
  return block;
}
buildFirstBlock(4).map((row) => console.log(row.join("")));

function buildSubsequentBlocks(firstLine, numberOfLines) {
for
}
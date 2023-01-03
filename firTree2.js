function main(rows) {
  rows = rows * 4;
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let k = rows - i; k >= 0; k--) {
      row.push(" ");
    }
    for (let j = 1; j <= i; j += 0.5) {
      row.push("*");
    }
    console.log(row.join(""));
  }
  for (let l = 1; l <= rows / 4; l++) {
    let trunkRow = [];
    for (n = 0; n <= rows - 1; n++) {
      trunkRow.push(" ");
    }
    for (let m = 1; m <= l; m++) {
      trunkRow.push("|");
    }
    console.log(trunkRow.join(""));
  }
}
main(1);

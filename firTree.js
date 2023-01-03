function main(rows) {
  let stars = [];
  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let k = rows - i; k > 0; k--) {
      row.push(" ");
    }
    for (let j = 1; j <= i; j++) {
      row.push("*");
      row.push(" ");
    }
    stars.push(row);
  }
  for (let i = 0; i < rows; i++) {
    console.log(stars[i].join(""));
  }
}
main(13);
module.exports = main;

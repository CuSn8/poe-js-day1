class Calc {
  constructor(result = 0, history = []) {
    this.result = result;
    this.history = history;
  }
  compute(string) {
    const numbers = string.split(/[\+\-\*\/]/).map((item) => parseInt(item));
    const operator = string.split(/[0-9]/).filter((i) => i.length > 0);
    console.log("numbers", numbers);
    console.log("operator", operator);
    switch (operator[0]) {
      case "+":
        return `${string}=${numbers[0] + numbers[1]}`;
        break;
      case "-":
        return `${string}=${numbers[0] - numbers[1]}`;
        break;
      case "*":
        return `${string}=${numbers[0] * numbers[1]}`;
        break;
      case "/":
        return `${string}=${numbers[0] / numbers[1]}`;
        break;
      default:
        return "Invalid operation";
    }
  }
}

let calc = new Calc();

console.log(calc.compute("1+2")); //"1+2=3"
console.log(calc.compute("2-1")); //"2-1=1"
console.log(calc.compute("2*3")); //"2*3=6"
console.log(calc.compute("10/2")); //"10/2=5"
/*
console.log(calc.lastResult()); //5
console.log(calc.history()); //["1+2=3","2-1=1","2*3=6","10/2=5"]
*/

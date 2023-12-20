function depositCalculator(input) {
let depositSum = Number(input[0]);
let depositPeriod = Number(input[1]);
let annualInterestRate = Number(input[2]);

let annualInterestPercent = annualInterestRate / 100;

let totalSum = depositSum + depositPeriod * ((depositSum * annualInterestPercent / 12));

console.log(totalSum);
}
depositCalculator(["2350", "6", "7"]);
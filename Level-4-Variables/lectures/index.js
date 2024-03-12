let welcomeMessage = "Hello friends";
console.log(welcomeMessage);

let bagPrice = 15599 - (10 / 100) * 15599 - 272;
let jeansPrice = 2499 - (41 / 100) * 2499 - 29;

let bagValue = Math.round(((jeansPrice + bagPrice + 25 + 28) * 118) / 100);

let bagSummarry = `Your final myntra bag value is ${bagValue}`;

console.log(bagSummarry);


// Logical AND (&&)
// Returns TRUE if both operands are TRUE
// console.log(true && false);

// let highIncome = true;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;

// console.log(eligibleForLoan);

// Logical OR (||)
// Returns True if one of the operands is true

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;

console.log('Eligible',eligibleForLoan);

// NOT (!)

let applicationRefused = !eligibleForLoan;

console.log('Application Refused', applicationRefused);
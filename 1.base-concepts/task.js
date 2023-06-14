"use strict";
function solveEquation(a, b, c) {
  let arr;
  let d = Math.pow(b, 2) - (4 * a * c);
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);

  if (d < 0) {
    arr = [];
  } else if (d == 0) {
    let x = -b / (2 * a)
    arr = [x];
  } else {
    
    arr = [x1, x2];
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let per = parseInt(percent) / 100 / 12;
	if (isNaN(percent) === true ||
		isNaN(contribution) === true ||
		isNaN(amount) === true ||
		isNaN(countMonths) === true) {
		return false;
	} else {
		let sum = amount - contribution;
		let period = countMonths;
		let pay = sum * (per + per / (((1 + per) ** period) - 1));
		let totalAmount = (pay * period).toFixed(2);
		return Number(totalAmount);
	}
}
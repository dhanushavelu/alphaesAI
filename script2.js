/*
//TO FIND AVERAGE
function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
// TO CHECK WINNER
function checkWinner(avgEagles, avgSharks) {
  if (avgEagles > avgSharks) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles) {
    console.log("Sharks win the trophy");
  } else {
    console.log("It's a draw!");
  }
}

//TO CHECK TEAM HAS ABOVE 80
function checkWinnerBonus1(avgEagles, avgSharks) {
  if (avgEagles > avgSharks && avgEagles >= 80) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles && avgSharks >= 80) {
    console.log("Sharks win the trophy");
  } else {
    console.log("No team wins the trophy");
  }
}

//TO CHECK WHETHER THE MATCH DRAW OR NOT
function checkWinnerBonus2(avgEagles, avgSharks) {
  if (avgEagles > avgSharks && avgEagles >= 80) {
    console.log("Eagles win the trophy");
  } else if (avgSharks > avgEagles && avgSharks >= 80) {
    console.log("Sharks win the trophy");
  } else if (avgEagles === avgSharks && avgEagles >= 80 && avgSharks >= 80) {
    console.log("It's a draw!");
  } else {
    console.log("No team wins the trophy");
  }
}

// Test Data 1
let eaglesAvg = calcAverage(75, 89, 95);
let sharksAvg = calcAverage(92, 81, 78);
console.log("Test Data 1:");
checkWinner(eaglesAvg, sharksAvg);

// BONUS 1
eaglesAvg = calcAverage(85, 92, 88);
sharksAvg = calcAverage(79, 90, 82);
console.log("\nTest Data BONUS 1:");
checkWinnerBonus1(eaglesAvg, sharksAvg);

// BONUS 2
eaglesAvg = calcAverage(88, 90, 82);
sharksAvg = calcAverage(84, 91, 85);
console.log("\nTest Data BONUS 2:");
checkWinnerBonus2(eaglesAvg, sharksAvg);
*/


// CHALLENGE 2

// Function to calculate delivery fee and print result
function calculateDelivery(orderValue) {
  let deliveryFee = (orderValue >= 100 && orderValue <= 500) 
    ? orderValue * 0.10 
    : orderValue * 0.15;

  let total = orderValue + deliveryFee;

  console.log(`The order was ${orderValue}, the delivery fee was ${deliveryFee}, and the total amount ${total}`);
}
// Run all test data

calculateDelivery(450);
calculateDelivery(80);
calculateDelivery(600);
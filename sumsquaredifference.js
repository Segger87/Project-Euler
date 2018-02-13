/* The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum. */


function squared() {
  var countSqr = 0;
  var countSqrSum = 0;
for(var i = 1; i <= 100; i++){
    countSqr += i * i; //calculates the sum of the squares
    countSqrSum += i; //adds all the natural numbers together
  }
  return countSqrSum * countSqrSum - countSqr; //multiplies the natural numbers and subtracts the sum of squares
}

squared();

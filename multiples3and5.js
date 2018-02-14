/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function multiples(sum) {
  var a = 0;
  var b = 0;
  var c = 0;
  for (var i = 3; i < sum; i+=3){
    a += i;
  }
   for (var j = 5; j < sum; j+=5){
    b += j;
  }
  for (var k = 15; k < sum; k+=15){
    c += k; // this is to calculate duplicates (multiples of 15)
  }
  return a + b - c;
}

multiples(1000);

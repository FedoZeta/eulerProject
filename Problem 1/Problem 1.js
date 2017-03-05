function multiple_of_3_and_5(n) {
  /* Returns the sum of all the multiples of 3 and 5 between 1 and n-1 */
  var sum = 0;
  for(var i = 1; i < n; i++)
    if (i % 3 === 0 || i % 5 === 0) { sum += i; }
  return sum;
}

multiple_of_3_and_5(1000);
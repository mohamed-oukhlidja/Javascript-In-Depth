// Write a function that takes a number as a parameter and uses a while loop to calculate the sum of all numbers from 1 to that number.
function calculateSum(n) {
  // Your code here
  let sum = 0;
  while (n >= 1) {
    sum += n;
    n--;
  }
  return sum;
}

// Example
console.log(calculateSum(5)); // Should log: 15 (1 + 2 + 3 + 4 + 5)

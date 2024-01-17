// Write a function that takes a number as a parameter and uses a while loop to calculate its factorial.

function calculateFactorial(n) {
  // Your code here
  let factorial = 1;
  while (n >= 1) {
    factorial *= n;
    n--;
  }
  return factorial;
}

// Example
console.log(calculateFactorial(5)); // Should log: 120 (5 * 4 * 3 * 2 * 1)

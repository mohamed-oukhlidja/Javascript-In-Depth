// Write a function that takes a number as a parameter and uses a while loop to determine if that number is a power of two.

function isPowerOfTwo(num) {
    // Your code here
    while (num > 1) {
        if (num % 2 !== 0) {
          return false;
        }
        num /= 2;
      }
      return num === 1;
  }
  
  // Examples
  console.log(isPowerOfTwo(4)); // Should log: true (2^2)
  console.log(isPowerOfTwo(8)); // Should log: true (2^3)
  console.log(isPowerOfTwo(10)); // Should log: false
  
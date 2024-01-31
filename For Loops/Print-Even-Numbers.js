// Write a function that takes a number as a parameter and uses a for loop to print all even numbers from 2 to that number.

function printEvenNumbers(n) {
  if (n === 0 || n < 2) {
    console.error('Please provide a valid positive integer greater than or equal to 2.');
  }else  {
    for (let i = 2; i <= n; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }

}
function testPrintEvenNumbers() {
  console.log('Test Case 1:');
  console.log('Expected output: 2 4 6 8 10');
  console.log('Actual output:');
  printEvenNumbers(10);
  console.log('\n---------------------------\n');

  console.log('Test Case 2:');
  console.log('Expected output: 2 4 6 8 10 12 14 16 18 20');
  console.log('Actual output:');
  printEvenNumbers(20);
  console.log('\n---------------------------\n');

}

// Run the tests
testPrintEvenNumbers();

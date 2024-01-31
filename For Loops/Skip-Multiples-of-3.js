// Write a function that takes a number as a parameter and uses a for loop to print all numbers from 1 to that number, skipping multiples of 3.
function skipeMultiplesOfThree(num) {
    // Ensure the provided value is a positive integer
    if (typeof num !='number' || num < 1 || !Number.isInteger(num)) {
        console.error('Please provide a valid positive integer greater than or equal to 1.');
    }else{
        for (let i = 0; i <= num; i++) {
            if (i % 3 !== 0) {
                console.log(i);
            }
            
        }
    }
}


function testskipeMultiplesOfThree() {
    console.log('Test Case 1:');
    console.log('Expected output: 1 2 4 5 7 8 10');
    console.log('Actual output:');
    skipeMultiplesOfThree(10);
    console.log('\n---------------------------\n');
  
    console.log('Test Case 2:');
    console.log('Expected output: 1 2 4 5 7 8 10 11 13 14 16 17 19 20');
    console.log('Actual output:');
    skipeMultiplesOfThree(20);
    console.log('\n---------------------------\n');

    console.log('Test Case 3:');
    console.log('Expected output: Please provide a valid positive integer greater than or equal to 1.');
    console.log('Actual output:');
    skipeMultiplesOfThree(0);
    console.log('\n---------------------------\n');

    console.log('Test Case 4:');
    console.log('Expected output: Please provide a valid positive integer greater than or equal to 1.');
    console.log('Actual output:');
    skipeMultiplesOfThree('5');
    console.log('\n---------------------------\n');
  
  
  }
  
  // Run the tests
  testskipeMultiplesOfThree();

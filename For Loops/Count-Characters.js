// Write a function that takes a string as a parameter and uses a for loop to count and return the number of characters in the string.
function CountCharacters(string) {
  let numeOfCharacters = 0;
  for (let i = 0; i < string.length; i++) {
    numeOfCharacters++;
  }
  return numeOfCharacters;
}

// Simple test cases
function testCountCharacters() {
  let result = CountCharacters("Hello world");
  let resultExpected = 11;
  if (result === resultExpected) {
    console.log("Test passed for 'Hello world'");
  } else {
    console.error(
      `Test failed for 'Hello, World!'. Expected ${resultExpected}, but got ${result}`
    );
  }

  result = CountCharacters("");
  resultExpected = 0;
  if (result === resultExpected) {
    console.log("Test passed for an empty string");
  } else {
    console.error(
      `Test passed for an empty string. Expected ${resultExpected}, but got ${result}`
    );
  }
}

testCountCharacters();

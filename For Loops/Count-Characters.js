// Write a function that takes a string as a parameter and uses a for loop to count and return the number of characters in the string.
function numberOfChar(string) {
  let nume =0;
  for (let i = 0; i < string.length; i++) {
    nume++;
  }
  return nume;
}

console.log(numberOfChar("hello"));

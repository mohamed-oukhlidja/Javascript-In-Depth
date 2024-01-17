// Write a function that prompts the user to enter a password. Use a while loop to continue prompting the user until they enter the correct password, which you can define within the function.

function passwordChecker() {
    // Your code here
    const correctPassword = "secret";
    let userInput = prompt("Enter the password: ");
    
    while (userInput !== correctPassword) {
      userInput = prompt("Incorrect password. Try again: ");
    }
    
    console.log("Login successful!");
  }
  
  // Example
  passwordChecker();
  
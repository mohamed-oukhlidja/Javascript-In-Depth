# While Loops in JavaScript
## Introduction
A while loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. The syntax for a while loop is as follows:

```
while (condition) {
  // code to be executed
}
```
**Condition** : An expression that is evaluated before each iteration. If the condition is true, the code inside the loop is executed. If the condition is false, the loop is terminated.

**Example** :
```
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```
This loop will print numbers from 0 to 4, as long as the condition count < 5 is true.

**Infinite Loops** :Be cautious with while loops to avoid creating infinite loops. Ensure that the condition inside the loop eventually becomes false, or include a mechanism to break out of the loop.

**Break Statement** : You can use the break statement to exit a while loop prematurely based on a certain condition.
```
let i = 0;

while (true) {
  console.log(i);
  i++;

  if (i === 5) {
    break; // exit the loop when i equals 5
  }
}
```
**Continue Statement** : The continue statement can be used to skip the rest of the code inside the loop for the current iteration and move to the next iteration.
```
let i = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue; // skip the rest of the loop for i=3
  }

  console.log(i);
}
```
**Nested While Loops** : You can have one or more while loops inside another while loop, creating nested loops.
```
let i = 0;
let j = 0;

while (i < 3) {
  while (j < 3) {
    console.log(i, j);
    j++;
  }

  i++;
  j = 0; // reset j for the next iteration of the outer loop
}
```
## Conclusion
While loops are versatile and useful for situations where you need to repeat a block of code based on a dynamic condition. Always ensure that your loop has an exit condition to prevent infinite execution.

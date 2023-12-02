// 1. Create a let variable called "points" and print it out
let points;
console.log(points); //undefined
// 2. Assign "points" the number 20 and print it out
points = 20;
console.log(points); //20

// 3. Add 15 to "points" and print it out
points += 15;
console.log(points); //35

// Question1: What are all the ways you can achieve step 3 above?
/******** ONE *********/
points = points + 15;
/******** TWO *********/
points += 15;
// Question2: What would happen if you tried to do this with a const variable?
// it is not going to work cuz const var can not be reassigened

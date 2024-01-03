// First, lookup how logical AND, OR and NULLISH assignment work
// using Google. Then try the following examples.

// What would each of the following variables evaluate to:

// 1. let username = "";
//    username &&= "tiger"; this is equal to "" && "tiger" so it will log empty string
let username = "";
console.log((username &&= "tiger"));

// 2. let vip = 0;
//    vip ||= 3; this is equal to 0 || 3 so it will log 3
let vip =3
console.log(vip ||= 3);

// 3. let loggedIn = null;
//    loggedIn ??= 0; this equal to null ?? 0 so it will log null
let loggedIn = null;
console.log( loggedIn ??= 0);

// Log each of the values out to see the results.

// This is very very challenging, it might take several tries
// or coming back to it in the future when it's more relevant.

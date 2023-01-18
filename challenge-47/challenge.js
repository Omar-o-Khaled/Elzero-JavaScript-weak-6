let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// 1
my=(my.slice(zero++,(++counter))).reverse();

// 2
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

// 3
console.log(my.slice(zero--,-true)); // ["Elham", "Mazero"]

// 4

// frist way

console.log(my[zero]="Elzero"); // "Elzero"

console.log(`${my[zero][counter++]}${my[zero][counter--].toUpperCase()}`); // "rO"


// sec way
console.log(my.concat("Elzero")[my.length]); // "Elzero"

console.log(my.concat("Elzero")[my.length][counter++]+my.concat("Elzero")[my.length][counter].toLocaleUpperCase());
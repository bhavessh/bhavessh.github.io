// //import export
// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }


// const result1 = add(5, 3);
// console.log(result1);

// const result2 = subtract(5, 3);
// console.log(result2);

import add, {subtract} from './calc.mjs'
const result1 = add(5, 3);
const result2 = subtract(5, 3);
console.log(result2); // bcz we have(calc.mjs) use not use deafult here so we have to add inside the curly braces
console.log(result1); /// bcz we have(calc.mjs) use default here so we have add outside the curly braces


// import {add} from './calc.mjs'
// const result1 = add(5, 3);
// console.log(result1);


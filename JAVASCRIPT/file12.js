// var a =10;
// if(10>5){
//     var a = 20; // this will change the value of a globally
// }
// console.log(a);

let a =10;
if(10>5){
    let a = 20; // this will not change the value of a globally,
}
console.log(a); // this will print 10, because let is block scoped

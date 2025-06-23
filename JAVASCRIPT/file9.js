//array methods
const points = [2, 5, 3, 2, 1, 8];
const score = [10, 20, 50, 20];
// console.log(score);
// console.log(score[0]);
// score.push(70);
// console.log(score);
// console.log(score.length);
// for (let i = 0; i < score.length; i++) {
//   console.log(score[i]);
// }
// points.forEach((value) => {
//   console.log(value);
// });
// points.forEach((value, index) => {
//   console.log(value,index);
// });
// points.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

// points.forEach((value,index) => {
//     // console.log(c[b]);
//     console.log(index);
// });

// points.forEach((value,index,arr) => {
//     console.log(value,index,arr);
// });

// const newArr = points.map((value,index) => (value += 5));
// console.log(newArr);


// const result = points.find((value) => value == 2);
// console.log(result);

const result = points.reduce((sum,value) => {
    return sum + value
}, 0);
console.log(result);


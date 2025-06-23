// const student = {
//     name: "John Doe",
//     age: 20,

// };

// console.log(JSON.stringify(student)); 
const student = '{ "name":"John Doe","age": "20"}';
const newstudent = JSON.parse(student);
console.log(newstudent); // { name: 'John Doe', age: '20' }
console.log(newstudent.name); // John Doe
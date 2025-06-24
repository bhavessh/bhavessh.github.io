// const f1 = () => {
//     setTimeout(() => {
//     return 5;
// },1000
// );
// };

// const f2 = (x) => {
//     console.log(x+6);
// };
// const n = f1();
// f2(n);

// const f1 = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(5);
//         }, 1000);
//     });
// }
////2
// const f1 = () => {
//     return new Promise((resolve) => {
//         // setTimeout(() => {
//             resolve(5);
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f1().then((n) => f2(n));


// const f1 = () => {
//     return new Promise((resolve,reject) => {
//             // resolve(5);
//             reject("something went wrong");
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f1()
//     .then((n) => f2(n))
//     .catch((error) =>console.error(error));


// //for -ve it should be print invalid but positive number should be print
// const f1 = (n) => {
//     return new Promise((resolve, reject) => {
//         if (n < 0) {
//             reject("Invalid number");
//         }
//         resolve(n);
//     });
// };
// const f2 = (x) => {
//     console.log(x + 6);
// };
// f1(-5)
//     .then((n) => f2(n))
//


fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>res.json())
    .then((data) =>{
    // .catch(error => console.log(error));
    data.forEach((value) => {
        console.log(value.name);
        console.log(value.email);
        console.log(value.address.city,value.name,value.email);
    });
    })
    .catch((error) => console.log(error));

// without .then it will
//fetch return // a promise so we can use .then to handle the response
    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data =await res.json();
        data.forEach((value) => {
            console.log(value.name,value.email);
        });
    };
    fetchData();
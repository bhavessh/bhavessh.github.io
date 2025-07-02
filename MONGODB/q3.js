// db.employees.insertMany([{
//     name:"Jhon",
//     age: "30",
//     email:"jhon@email.com",
//     position: "Software Engineer",
//     department: "Engineering",
//     salary:1456,
//     Location:["New York", "USA"],
//     date: Date()
// },
// {name: "Jane",
//     age: "25",
//     email: "jane@rmail.com",
//     position: "Data Analyst",
//     department: "Data Science",
//     salary: 1200,
//     Location: ["San Francisco", "USA"],
//     date: Date()
// }
// , {
// name: "Doe",
//     age: "22",
//     email: "doe@email.com",
//     position: "Product Manager",
//     department: "Product",
//     salary: 1500,
//     Location: ["Los Angeles", "USA"],
//     date: Date()
// }, {
//     name: "Alice",
//     age: "28",
//     email: "alice@emial.com",
//     position: "UX Designer",
//     department: "Design",
//     salary: 1300,
//     Location: ["Seattle", "USA"],
//     date: Date()
// }, {
//     name: "Bob",
//     age: "35",
//     email: "bob@bob.com",
//     position: "DevOps Engineer",
//     department: "mining",
//     salary: 1600,
//     Location: ["Austin", "USA"],
//     date: Date()
// }
// ])


// db.employees.find().skip(1)

db.employees.find().skip(1).limit(1)

db.employees.find().sort({name:1}) // in ascending order
db.employees.find().sort({name:-1}) // in descending order

db.employees.find().sort({name:1}).limit(1) // in ascending order and limit to 1

db.employees.find().sort({name:1}).skip(1).limit(1) // in ascending order, skip 1 and limit to 1


db.employees.find({department: "Engineering"});

db.employees.find({},{_id:0, name:1}); // find all employees but only return the name field, excluding the _id field

db.employees.find({},{_id:0, name:true}); // 0 and 1can give only for _id field, not for other fields
db.employees.find({},{_id:0, name:1, department:1});// find all employees but only return the name and department fields, excluding the _id field

db.employees.find({},{location:"los angeles"}); // this will not work, as location is an array and cannot be queried like this


db.employees.find({},{}) // first will give filter 2nd will projections

db.employees.find({},{_id:0, name:1, age:1, email:1, position:1, department:1, salary:1, Location:1, date:1}) // find all employees and return all fields except _id


db.employees.find({},{EmpName:"$name"}) // this will not work, as the projection syntax is incorrect



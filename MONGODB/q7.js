db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, salary: 1 } },
  { $sort: { salary: 1 } },
  { $limit: 3 },
]);

db.employees.aggregate([
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([{ $project: { empName: "$name" } }]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] },
    },
  },
]);

db.students.insertOne({
  name: "Alice Johnson",
  age: 23,
  courses: ["Math", "Physics"],
  enrolled: true,
});
db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

//display name,email,salary of IT employees

//display annual salary of all employees

//display employees whose salary is greater
//than 3000 and show CTC instead of Salary field

db.students.aggregate([
  { $group: { _id: null, averageAge: { $avg: "$age" } } },
]);

db.address.insertOne({
  studentId: ObjectId("685ce0ec89c4bc1576ab1d88"),
  city: "Jacksonville",
  country: "USA",
});

db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId",
      as: "address",
    },
  },
  { $unwind: "$address" },
  { $project: { name: 1, "address.city": 1, "address.country": 1 } },
]);

db.employees.aggregate([
    {$project:{name:1,location:1}},
    {$unwind:"$location"}
])


db.posts.insertOne({_id: "p1",post:"post1"});
db.posts.insertOne({_id: "p2",post:"post2"});


db.comments.insertOne({
  _id:"c1",
  pid:"p1",
  comment:"This is a comment 1 of post 1",
});
db.comments.insertOne({
  _id:"c2",
  pid:"p1",
  comment:"This is comment 2 of post 1",
});


db.comments.insertOne({
  _id:"c3",
  pid:"p2",
  comment:"This is comment 1 of post 2",
});

db.comments.insertOne({
  _id:"c4",
  pid:"p2",
  comment:"This is comment 2 of post 2"
});

db.comments.insertOne({
  _id:"c5",
  pid:"p2",
  comment:"This is comment 3 of post 2"
});
db.comments.find()



db.posts.aggregate([
  { $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments"
    },
  },

  { $unwind: "$comments" },
])


db.posts.aggregate([
  { $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments"
    },
  },
])



db.employees.aggregate([
  {
    $project: {
      _id: 0, 
      name: 1,
      salary: 1,
      Grade: {
        $cond: {if:{},then:"Grade A",else:"Grade B"},
      },
    },
  },
])



db.employees.aggregate([
  {
    $project: {
      _id: 0, 
      name: 1,
      salary: 1,
      Grade: {
        $cond: {if:{$gt:["$salary",1500]},then:"Grade A",else:"Grade B"},
      },
    },
  },
])




db.employees.insertMany([{
    name:"Jhon",
    age: "30",
    email:"jhon@email.com",
    position: "Software Engineer",
    department: "Engineering",
    salary:1456,
    Location:["New York", "USA"],
    date: Date()
},
{name: "Jane",
    age: "25",
    email: "jane@rmail.com",
    position: "Data Analyst",
    department: "IT",
    salary: 1200,
    Location: ["San Francisco", "USA"],
    date: Date()
}
, {
name: "Doe",
    age: "22",
    email: "doe@email.com",
    position: "Product Manager",
    department: "Product",
    salary: 1500,
    Location: ["Los Angeles", "USA"],
    date: Date()
}, {
    name: "Alice",
    age: "28",
    email: "alice@emial.com",
    position: "UX Designer",
    department: "Design",
    salary: 1300,
    Location: ["Seattle", "USA"],
    date: Date()
}, {
    name: "Bob",
    age: "35",
    email: "bob@bob.com",
    position: "DevOps Engineer",
    department: "IT",
    salary: 1600,
    Location: ["Austin", "USA"],
    date: Date()
}
])

// add new filed strSalary in employees
//store "2500" for all IT employees
//store "1000" for other employees
db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      strSalary:{
        $cond:{
          if: { $eq: ["$department", "IT"] },
          then: "2500",
          else: "1000"
        }
      }}}
])


db.employees.aggregate([
  {
    $project: {
      _id:0,
      name:1,
      department:1,
      sal:{$convter:{input:"$strSalary", to:"int"}}}},
      {$group:{_id:"$department", total:{$sum:"$sal"}}},
      
])

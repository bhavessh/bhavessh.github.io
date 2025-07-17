// let name = "John"
// console.log("hello " + name)

// let name = process.argv[2]
// console.log("hello "+name)


// let name1 = process.argv[2]
// let name2 = process.argv[3]
// console.log(`hello ${name1 + name2}`)

// let name = process.argv[2] || John
// console.log("hello "+name)

import express from "express"
const app=express()
const PORT = process.argv[2] || "8080"
app.listen(PORT,()=>{
    console.log(`server startes ${PORT}`)
})
app.get("/",(req,res)=>{
    res.send(`hello world from port ${PORT}`)
})

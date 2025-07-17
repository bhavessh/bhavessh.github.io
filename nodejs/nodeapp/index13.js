import dotenv from 'dotenv'
dotenv.config()
const dbuser = encodeURIComponent(process.env.DBUSER) //encodeuri-- gives 
const dbpass = encodeURIXomponent(process.env.DBPASS)
console.log(dbuser,dbpass)
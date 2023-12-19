const express=require("express")
const app=express()
// const bodyParser =require('body-parser')


const leetcode=require('./routes/Leetcode')

const PORT = process.env.PORT || 4000

app.listen(PORT , ()=>{
    console.log("listening to PORT",PORT)
})

app.use("/leetcode",leetcode)
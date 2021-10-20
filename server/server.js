const express = require('express')

const app = express();

app.listen(3300,()=>{
    console.log("listening at port 3300")
})


app.get('/' ,(req,res) =>{
console.log("Home page was visited")
})
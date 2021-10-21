const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();


//MiddleWares
app.use(cors())
app.use(express.json());
// express.json() is middleware used to let know express 
// that to pasre the req body in json.


//Mongoose

mongoose.connect('')



app.get('/',(res,req) => {
    console.log("Home Visited...!!!")

})

app.get('/hello',(req,res) =>{
    res.send('hello World')
})

app.post('/api/user/register',(req,res) =>{
console.log(req.body)
res.json({status :'ok'})

})


app.listen(3300, () =>{
    console.log("Listening At Port 3300");
})


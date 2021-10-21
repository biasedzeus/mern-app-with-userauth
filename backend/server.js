const express = require('express');

const app = express();

const cors = require('cors')
app.use(cors())


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


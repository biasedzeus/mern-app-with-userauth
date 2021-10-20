const express = require('express');

const app = express();

app.listen(3300, () =>{
    console.log("Listening At Port 3300");
})

app.get('/',(res,req) => {

})


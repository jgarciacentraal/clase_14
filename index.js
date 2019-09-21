const express = require('express')
const app = express()
const port = 9000

const handleRoute = function (req,res){
    res.send('Hello World');
};

app.get('/',handleRoute);

/* app.get('/',function(req,res){
    res.send('Hello World!')
}) */ 

app.listen(port,function (){
    console.log(`Èxample app listening on port ${port}!`)
})
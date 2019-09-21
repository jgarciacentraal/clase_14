const express = require('express')
const app = express()
const port = 9000

const handleRoute = function (req,res){
    res.send('Hello World');
};

app.get('/',handleRoute);

app.post('/another-route', function (req,res){
    res.send('Hello to another route')
})

app.put('/put-route',function (req,res){
    res.send('This is a put route')
})

app.delete('/delete-route',function(req,res){
    res.send('This is a delete route')
})


/* app.get('/',function(req,res){
    res.send('Hello World!')
}) */ 



app.listen(port,function (){
    console.log(`Èxample app listening on port ${port}!`)
})
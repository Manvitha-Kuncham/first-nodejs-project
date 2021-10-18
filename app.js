const express = require('express');
const port = 3000;
const app=express();
app.get('/',(req,resp)=>{
    //resp.status(200).contentType('text/html').send('<b>Hello Client</b>');
    resp.sendFile(__dirname + '/static/index.html');
});
app.listen(port,()=>{
    console.log('i am starting....');
 });
 app.use('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min', express.static('static'));
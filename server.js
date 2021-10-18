const express = require('express');
const port = 3000;
const app=express();
app.get('/',(req,resp)=>{
    //resp.status(200).contentType('text/html').send('<b>Hello Client</b>');
    resp.sendFile(__dirname + '/static/login.html');
});
app.get('/test',(req,resp)=>{
    resp.status(200).contentType('text/plain').send('Test API');
}); 
app.listen(port,()=>{
   console.log('i am starting....');
});
app.use('/xyz', express.static('static'));
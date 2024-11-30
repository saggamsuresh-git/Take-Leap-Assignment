const express = require('express');
const app = express();

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000');
})

app.get('/',(request,response)=>{
    response.send("Hello World")
})

app.get('/users',(request,response)=>{
    const users=[
        {id:1,name:'ABCD',mail:'example1@gmail.com'},
        {id:2,name:'ABcd',mail:'example2@gmail.com'},
        {id:3,name:'Abcd',mail:'example3@gmail.com'}
    ];
    response.send(users);
})
const express = require('express')
const app = express()

// const responseObject = {
//     name : 'SAAAA',
//     id : 1,
//     college : 'RGUKT',
//     branch : 'ECE'
// }

app.get("/",function(req,res){
    res.send("Hello World")
})

app.get('/user', function (req, res) {
  res.json({
    name : 'SAAAA',
    id : 1,
    college : 'RGUKT',
    branch : 'ECE'
    })
})
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
  });

app.listen(3000,()=>{
    console.log('Server is running on http://localhost:3000')
})
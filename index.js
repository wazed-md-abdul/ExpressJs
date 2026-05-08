const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const users = [
    { id: 1, age:21, name: "John Doe" },
    { id: 2, age:23, name: "Jane Smith" },
    { id: 3, age:24, name: "Alice Johnson" },
    { id: 4, age:25, name: "Bob Brown" }
]

app.use(cors());
app.use(express.json());
app.post('/users', (req,res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);

    res.send({succes: true, data: req.body});
    console.log(req.body);
    
})
app.get('/', (req,res)=>{

    res.send("hello from express server");

})
app.get('/users', (req,res)=>{
    res.send(users);
})
app.get('/contact', (req,res)=>{
    res.send("hello from contact page");

})
app.get('/help',(req,res)=>{
    res.send("hello from help page");
})
app.listen(port, ()=>{
    console.log('server is running on 8000 port');
    
})
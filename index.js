const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" }
]
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
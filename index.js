const express = require('express');

const app = express();
const port = process.env.PORT || 8000;
app.get('/', (req,res)=>{

    res.send("hello from express server");

})
app.listen(port, ()=>{
    console.log('server is running on 8000 port');
    
})
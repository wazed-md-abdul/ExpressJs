const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb://expressjs:w03Vca9s5gCLSMeX@ac-q6abff3-shard-00-00.5fbgc5w.mongodb.net:27017,ac-q6abff3-shard-00-01.5fbgc5w.mongodb.net:27017,ac-q6abff3-shard-00-02.5fbgc5w.mongodb.net:27017/?ssl=true&replicaSet=atlas-9n6o1j-shard-0&authSource=admin&appName=ClusterBomb";
app.use(cors());
app.use(express.json());
const users = [
    { id: 1, age:21, name: "John Doe" },
    { id: 2, age:23, name: "Jane Smith" },
    { id: 3, age:24, name: "Alice Johnson" },
    { id: 4, age:25, name: "Bob Brownfsfsf" }
]


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const db = client.db('CrudOperationWithExpressJs');
    const userCollection = db.collection('users');
    app.get('/user', async (req,res)=>{
     
       const cursor = userCollection.find();
       const result = await cursor.toArray();
       users.push(result);
        res.send(result);
    } )
    
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    app.get('/user/:id', async (req,res)=>{
        const id = req.params.id;
        const query = {_id: new ObjectId(id)};
        const result = await userCollection.findOne(query);
        res.send(result);
    })
    
    
  } finally {
    // Ensures that the client will close when you finish/error

  }
}
run().catch(console.dir);



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
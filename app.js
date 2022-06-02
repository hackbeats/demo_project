const express = require('express');
const app = express();
const port = 3000;
app.get('/',(req, res )=>{
 res.send("Server is working find ");       
})
app.get("/manish",(req,res)=>{
        res.send("Hi there my name is Manaish ")
})

app.get("*",(req,res)=>{
        res.status(500).json({message:"404 Not found!"})
})
app.listen(port,()=>{
console.log("Listning on port 3000")
})

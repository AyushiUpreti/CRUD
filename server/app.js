const express=require('express');
const mongoose=require('mongoose');
require("dotenv").config();
const app=express();
// require("./db/conn");
const users=require("./models/userSchema");
const router=require("./routes/router");
const cors=require('cors');

app.use(cors());
app.use(express.json());


app.use(router);


const PORT= 3001;

app.get("/",(req,res)=>{
    res.json("server start")
})
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})

const uri = process.env.Mongo;
mongoose.connect(uri,{useNewUrlParser:true});
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongodb connection successfully established");
})

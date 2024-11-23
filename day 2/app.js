console.log("hello world");
const express = require("express");
const app = express();
app.get ("/",(req,res)=>{
    res.send("i am home page");
});
app.get ("/product",(req,res)=>{
    res.send("i am product page");
});
app.get ("/about",(req,res)=>{
    res.send("i am about page");
});
app.get ("/contact",(req,res)=>{
    res.send("i am contact page");
});
const port = 3000;
app.listen(port,()=>{
    console.log("server is now started .. "); 
});
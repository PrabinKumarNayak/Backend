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
app.post ("/signup",(req,res)=>{
    res.send("record added succesfully");
});
app.put("/changepassword",(req,res)=>{
    res.send("password change succesfully");
});
app.delete("/delete",(req,res)=>{
    res.send("record deleted succesfully");
});
const port = 3000;
app.listen(port,()=>{
    console.log("server is now started .. "); 
});
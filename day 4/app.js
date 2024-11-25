const express = require("express");
const app = express();

app.get ("/",(req,res)=>{
    res.json({
        message : "welcome to home page"
    });
});
app.get ("/about/company",(req,res)=>{
    res.json({
        message : "welcome to company page"
    });
});
app.get ("/contact/user",(req,res)=>{
    res.json({
        message : "welcome to contact user page"
    });
});
app.get ("/cart/veg",(req,res)=>{
    res.json({
        message : "welcome to veg page"
    });
});

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
    
});
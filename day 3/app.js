const express = require("express");
const app = express();

const {homepage,aboutpage,productpage,contactpage} = require("./controller/controller")



app.get("/",homepage);
app.get("/about",aboutpage);
app.get("/product",productpage);
app.get("/contact",contactpage);


const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running in port ${port}`);
    
});
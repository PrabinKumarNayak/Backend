const homepage = (req,res)=>{
    res.send("i am homepage");
}
const aboutpage = (req,res)=>{
    res.send("i am aboutpage");
}
const productpage = (req,res)=>{
    res.send("i am productpage");
}
const contactpage = (req,res)=>{
    res.send("i am contactpage");
}

module.exports = {homepage,aboutpage,productpage,contactpage};
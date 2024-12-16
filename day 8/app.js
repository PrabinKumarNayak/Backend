const express = require("express");

const ebooks = [
    {
        id: "1",
        name: "Book 1"
    },
    {
        id: "2",
        name: "Book 2"
    }
]
const app = express();
app.use(express.json())
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running in port ${port}`);

});

app.get("/", (req, res) => {
    res.json("welcome to homepage");
});
app.get("/getall", (req, res) => {
    res.json({
        message: "list of books",
        booklist: ebooks
    });
});

app.post("/addbook", (req, res) => {
    const newBook = req.body;
    console.log(newBook);

    ebooks.push(newBook);
    res.json({
        message: "Book added successfully",
        bookDetails: newBook
    });
});
const express = require('express');
const port = 8007;

const server = express();

server.set("view engine", "ejs");
server.use(express.urlencoded());

let books = [
{
    id:"101",
    title:"Atomic Habits",
    author:"James Clear",
    genre:"Self Help",
    price:"11.98",
    img:"https://m.media-amazon.com/images/I/51-uspgqWIL._SX328_BO1,204,203,200_.jpg"
},
{
    id:"102",
    title:"Rich Dad Poor Dad",
    author:"Robert T. Kiyosaki",
    genre:"Finance",
    price:"14.99",
    img:"https://m.media-amazon.com/images/I/81BE7eeKzAL.jpg"
},
{
    id:"103",
    title:"The age of AI",
    author:"Henry A. Kissinger",
    genre:"Technology",
    price:"18.00",
    img:"https://m.media-amazon.com/images/I/71PfUwsDFKL._UF1000,1000_QL80_.jpg"
},
{
    id:"104",
    title:"It ends with us",
    author:"Colleen Hoover",
    genre:"Fiction",
    price:"13.99",
    img:"https://m.media-amazon.com/images/I/51LCO+afezL._SY445_SX342_.jpg"
},
{
    id:"105",
    title:"Heart of Darkness",
    author:"Joseph Conrad",
    genre:"Classics",
    price:"9.99",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4MNF_hNcExWeMfsbs9-t9QpiVP7rE4hqFsQ&s"
},

]

server.get("/", (req, res) =>{
    res.render("index",{ books})
})

server.get("/add-book", (req, res) =>{
    res.render('addBook')
})

server.post("/add-book", (req, res) =>{
    books.push(req.body);
    return res.redirect("/")
})

server.get("/delete-book/:id", (req, res) =>{
    let id = req.params.id;
    books = books.filter(book => book.id != id);
    return res.redirect("/");
})

server.get("/edit-book/:id", (req, res) =>{
    let id = req.params.id;
    let record = books.find(book => book.id == id);
    return res.render('editBook', {record});
})

server.post("/edit-book/:id", (req, res) =>{
    let id = req.params.id; 
    let updateData = books.map(book =>{
        if(book.id == id)
            return{id , ...req.body}
        else
            return book;
    })
    books = updateData
    return res.redirect("/")
})

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

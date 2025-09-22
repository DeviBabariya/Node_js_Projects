const express = require('express');
const port =8007;

const app = express();
const dbConnection = require('./config/dbConnection');
const bookModel = require('./model/book.model');

app.set('view engine', 'ejs');
app.use(express.urlencoded());

app.get('/', async (req, res) => {
    let books = await bookModel.find();
    return res.render('index',{books});
});

app.get("/add-book", (req, res) =>{
    res.render('add-book')
})

app.post('/add-book', async (req, res) => {
    let book = await bookModel.create(req.body);
    return res.redirect('/');
})

app.get('/delete-book/:id', async (req, res) => {
    let id = req.params.id;
    let book = await bookModel.findById(id);
    if(!book){
        console.log("book not found");
        return res.redirect('/');
    }
    await bookModel.findByIdAndDelete(id);
    console.log("book deleted successfully");
    return res.redirect('/');
})

app.get('/edit-book/:id', async (req, res) => {
    let id = req.params.id;
    let book = await bookModel.findById(id);
    if(!book){
        console.log("book not found");
        return res.redirect('/');
    }
    return res.render('edit-book', {record: book});
})

app.post('/update-book/:id', async (req, res) => {
    let id = req.params.id;
    let book = await bookModel.findById(id);
    if(!book){
        console.log("book not found");
        return res.redirect('/');
    }
    book = await bookModel.findByIdAndUpdate
    (id, req.body, {new: true});
    console.log("book updated successfully");
    return res.redirect('/');
})

app.listen(port,() => {
    dbConnection();
    console.log(`Server started at http://localhost:${port}`);
})
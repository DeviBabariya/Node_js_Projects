const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title : {
        type: String,
    },
    author :{
        type: String
    },
    genre :{
        type: String
    },
    price :{
        type: Number
    },
    img :{
        type: String,
    },
});
module.exports = mongoose.model('book',bookSchema);
const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title : String,
    director :{
        type: String
    },
    description :{
        type: String
    },
    releaseDate :{
        type: Date
    },
    genre :{
        type: String
    },
    rating :{
        type: String
    },
    profile :{
        type: String,
    }
});
module.exports = mongoose.model('Movie',movieSchema);
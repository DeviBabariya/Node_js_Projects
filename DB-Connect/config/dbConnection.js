const mongoose = require('mongoose');

const dbConnection = () => {
    // mongoose.connect("mongodb://localhost:27017/db-Connect")
    mongoose.connect("mongodb+srv://devibabariya:192006@cluster0.7xghalq.mongodb.net/pr-5-movies")
    .then(()=> console.log('DB is connected'))
    .catch(err =>console.log(err));
}

module.exports = dbConnection;
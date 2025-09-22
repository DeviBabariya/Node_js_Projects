const mongoose = require('mongoose');

const dbConnection = () => {
    mongoose.connect("mongodb://localhost:27017/PR-4")
    .then(()=> console.log('DB is connected'))
    .catch(err =>console.log(err));
}

module.exports = dbConnection;
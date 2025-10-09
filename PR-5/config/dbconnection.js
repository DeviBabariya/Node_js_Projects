const mongoose = require("mongoose");

const dbconnection = () => {
    mongoose.connect("mongodb+srv://devibabariya:192006@cluster0.7xghalq.mongodb.net/pr-5-movies")
        .then(() => console.log("DB is connected..."))
        .catch(err => console.error("DB Connection Error:", err));
};

module.exports = dbconnection();
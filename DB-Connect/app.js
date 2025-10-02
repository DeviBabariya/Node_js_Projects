const express = require('express');
const port = 8007;

const app = express();
const dbConnection = require('./config/dbConnection');



app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use("/uploads", express.static('uploads'));

app.use("/", require("./routes/index.routes"))

app.listen(port,() => {
    dbConnection();
    console.log(`Server started at http://localhost:${port}`);
})
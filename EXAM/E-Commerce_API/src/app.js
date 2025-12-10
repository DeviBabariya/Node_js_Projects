const express = require("express");
const path = require("path");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");

const app = express();

app.use(express.json());               
app.use(express.urlencoded({ extended: true })); 


app.use("/uploads", express.static(path.join(__dirname, "src/uploads")));

app.use("/api", require("./routes/index.routes"));

// Start server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));

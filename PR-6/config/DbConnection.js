const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb+srv://devibabariya:192006@cluster0.7xghalq.mongodb.net/Pr-6");
    console.log("Database Connected Successfully...");
  } catch (err) {
    console.error("Database Connection Failed:", err);
  }
};

module.exports = dbConnect;

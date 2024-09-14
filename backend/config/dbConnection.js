const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables from .env

const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to mongodb Database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;

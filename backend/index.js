const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dbConnect = require("./config/dbConnection");

// Imports routes
const authRoutes = require("./routes/authRoutes");
const todoRoutes = require("./routes/todoRoutes"); // Import todo routes

//Database Connection
dbConnect();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());

const todoItemsRoute = require("./routes/todoItems");

// Use the auth routes
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);
//app.use("/", todoItemsRoute);

// app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Server is listening on port ${port}!`));

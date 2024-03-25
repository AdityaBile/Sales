const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

// DataBase Routes
const connectDb = require("./utils/connectionDb");
const Item = require("./models/item");

//Routes
const transactionRoutes = require("./routes/transactionRoutes");
const monthRoutes = require("./routes/monthRoutes");
const chartRoutes = require("./routes/chartRoutes");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Access the views folder in our project directory
app.use(express.static(path.join(__dirname, "public"))); // Make public folder accessible to the client side
app.use(express.urlencoded({ extended: true })); //  Allows us to access data from HTML forms
// app.use(methodOverride("_method")); //  Overrides HTTP methods (GET, POST etc.) based on the _method parameter

// Handling cors error
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// connecting Database
connectDb();

// Transaction Route // *--------------------
app.use("/api/transactions", transactionRoutes);
// Each Month Routes // *-------------------
app.use("api/month", monthRoutes);
// Pie chart Routes // *--------------------
app.use("api/chart", chartRoutes);

app.listen(port, () => {
  console.log(`port is live at ${port}`);
});

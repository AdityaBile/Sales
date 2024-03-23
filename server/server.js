const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Access the views folder in our project directory
app.use(express.static(path.join(__dirname, "public"))); // Make public folder accessible to the client side
app.use(express.urlencoded({ extended: true })); //  Allows us to access data from HTML forms
app.use(methodOverride("_method")); //  Overrides HTTP methods (GET, POST etc.) based on the _method parameter
app.use(cors());

// main() => connecting db
main()
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send(`Hello`);
});
app.listen(port, () => {
  console.log(`port is live at ${port}`);
});

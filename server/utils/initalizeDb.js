const axios = require("axios");
const mongoose = require("mongoose");
const Item = require("../models/item");

let url = `https://s3.amazonaws.com/roxiler.com/product_transaction.json`;

connectDb()
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => console.log(err));

async function connectDb() {
  await mongoose.connect("mongodb://127.0.0.1:27017/sale");
  await initDb();
}

//Initialize Database
async function initDb() {
  try {
    let res = await axios.get(url);
    let data = res.data;
    // Traverse over each item
    for (let itemData of data) {
      let item = new Item(itemData);
      await item.save();
    }
    console.log("Data Saved");
  } catch (e) {
    console.log("Error: ", e);
  }
}

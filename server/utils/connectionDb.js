const mongoose = require("mongoose");

connectDb()
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => console.log(err));

async function connectDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/sale");
  } catch (e) {
    throw e;
  }
}

module.exports = connectDb;

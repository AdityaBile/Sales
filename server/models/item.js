const mongoose = require("mongoose");

//Creating Chat schema
const itemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  sold: {
    type: Boolean,
    required: true,
  },
  dateOfSale: {
    type: Date,
    required: true,
  },
});

// Creating a model -> (class)
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;

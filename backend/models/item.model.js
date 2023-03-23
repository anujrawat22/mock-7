const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  location: { type: String, required: true },
  postedAt: { type: Date },
  price: { type: Number },
  UserId : {type : mongoose.Schema.Types.ObjectId , ref : 'user'}
});

const ItemModel = mongoose.model("item", itemSchema);

module.exports = { ItemModel };

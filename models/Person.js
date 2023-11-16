const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PersonSchema = new Schema(
  {
    name: String,
    age: Number,
    favoriteFoods: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = Person = mongoose.model("persons", PersonSchema);

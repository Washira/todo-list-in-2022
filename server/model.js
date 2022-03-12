const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let todoSchema = new Schema(
  {
    text: { type: String },
    isComplete: { type: Boolean, default: false },
  },
  { collection: "todoList" }
);
module.exports = mongoose.model("todoList", todoSchema);
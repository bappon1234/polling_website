const mongoose = require("mongoose");

const optionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  votes: { type: Number, default: 0 }
});

const pollingSchema = new mongoose.Schema({
  questions: { type: String, required: true },
  options: [optionSchema] // Array of option objects
});

module.exports = mongoose.model("Poll", pollingSchema);

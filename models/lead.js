const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  name: String,
  email: String,
  source: String,
  status: {
    type: String,
    default: "New",
  },
  notes: [
    {
      text: String,
      createdAt: {
        type: Date,
        default: Date.now,
      },
    }
  ]
});

module.exports = mongoose.model("lead", leadSchema);

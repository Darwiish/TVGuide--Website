const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let program = new Schema({
  program_name: {
    type: String
  },
  firstDate: {
    type: String,
    format: Date
  },
  nextDate: {
    type: String,
    format: Date
  }
});

module.exports = mongoose.model("program", program, "Programs");

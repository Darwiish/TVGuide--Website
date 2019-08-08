const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Program = new Schema({
  program_name: {
    type: String
  },
  program_channel: {
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
},{
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
});

module.exports = mongoose.model("Program", Program, "Programs");

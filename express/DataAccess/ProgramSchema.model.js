const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let date = new Date().toLocaleString();


let Program = new Schema({
  program_name: {
    type: String
  },
  program_channel: {
    type: String
  },
  firstDate: {
    type: String,
    default: Date
  },
  nextDate: {
    type: String,
    default: Date
  }
},{
  timestamps: {
    createdAt: true,
    updatedAt: true,
  },
});

module.exports = mongoose.model("Program", Program, "Programs");

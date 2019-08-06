const mongoose = require("mongoose");
require("dotenv").config();
const MONGO_URL = process.env.REACT_APP_MONGO_URL;
mongoose.connect(
  "mongodb+srv://admin:admin1@cluster0-jcmuy.mongodb.net/test?retryWrites=true",
  { useNewUrlParser: true }
);

// mongoose.connect(MONGO_URL, {
//   useNewUrlParser: true
// });
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

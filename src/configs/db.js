const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Aman123:aman@cluster0.v2cb4.mongodb.net/unitDB?retryWrites=true&w=majority"
  );
};

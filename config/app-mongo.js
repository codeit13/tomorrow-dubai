const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://localhost:27017/tomorrowdubai", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to database!");
    })
    .catch((err) => {
      console.log("connection failed!", err);
    });
};

mongoose.set("debug", true);
module.exports = { connect };

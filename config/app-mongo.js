const mongoose = require("mongoose");
const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1/tomorrowdubai", {
      useNewUrlParser: true,
      useFindAndModify: false,
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

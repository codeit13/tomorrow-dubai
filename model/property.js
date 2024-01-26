const mongoose = require("mongoose");

const propertySchema = mongoose.Schema(
  {
    id: { type: String },
    propertyName: { type: String },
    location: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        //delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        //delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const propertyDB = mongoose.model("propertydbs", propertySchema);

async function totalRecords() {
  let total = 0;
  await propertyDB
    .countDocuments()
    .then((count) => {
      total = count;
      console.log("Count::", total);
    })
    .catch((error) => {
      console.error(error);
      // Handle the error
    });
  console.log("Records", total);
  return total;
}

module.exports = { propertyDB, totalRecords };

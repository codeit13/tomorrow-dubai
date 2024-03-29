const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  id: { type: String },
  buyerName: { type: String, require: true },
  email: { type: String, require: true },
  moreInfo: { type: String },
  listingId: { type: mongoose.Schema.Types.ObjectId, ref: "listingdbs" }, // Reference to the Agent model
  phone: { type: String },
  status: { type: String },
  from: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
});

// Define a text index on the name and description fields
// contactSchema.index({
//   //homeType: "text",
//   //description: "text",
//   city: "text",
//   //address: "text",
//   //state: "text",
// });

contactSchema.method("transform", () => {
  const obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  //delete obj._id;

  return obj;
});

const contactDB = mongoose.model("contactdbs", contactSchema);

module.exports = contactDB;

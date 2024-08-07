const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  id: { type: String },
  type: {
    type: String,
    enum: ["Point"],
    required: false,
  },
  coordinates: {
    type: [Number], // [longitude, latitude]
    required: false,
  },
});

const listingSchema = mongoose.Schema(
  {
    id: { type: String },
    slug: { type: String, unique: true },
    tag: { type: String, default: "New" },
    homeType: { type: String, require: true },
    isBuy: { type: Boolean, default: false }, // It is assumed that properties are created default by sellers
    isOffPlan: { type: Boolean, default: false },
    bed: { type: String },
    bath: { type: String },
    price: { type: String },
    priceOnApplication: { type: Boolean },
    currency: { type: String },
    sqFt: { type: String },
    address: { type: String, text: true },
    city: { type: String },
    state: { type: String },
    title: { type: String },
    propertyName: { type: String },
    description: { type: String },
    images: [{ type: String }],
    img1: { type: String },
    yearBuilt: { type: String },
    contactName: { type: String },
    contactEmail: { type: String },
    contactPhone: { type: String },
    sellerType: { type: String },
    isListed: { type: String },
    sellDuration: { type: String },
    amenities: [{ type: String }],
    details: { type: JSON },
    units: { type: JSON },
    paymentPlans: { type: JSON },
    location: {
      type: JSON,
      // index: "2dsphere", // Geospatial index,
      required: false,
    },
    agent: { type: mongoose.Schema.Types.ObjectId, ref: "agentdbs" }, // Reference to the Agent model
    status: { type: String },
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

// Define a text index on the name and description fields
listingSchema.index({
  //homeType: "text",
  //description: "text",
  city: "text",
  //address: "text",
  //state: "text",
});

const listingDB = mongoose.model("listingdbs", listingSchema);

async function totalRecords() {
  let total = 0;
  await listingDB
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

module.exports = { listingDB, totalRecords };

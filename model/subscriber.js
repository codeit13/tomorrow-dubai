const mongoose = require("mongoose");

const subscriberSchema = mongoose.Schema(
  {
    id: { type: String },
    email: { type: String, require: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        ret.id = ret._id;
        // delete ret._id;
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

subscriberSchema.method("transform", () => {
  const obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  //delete obj._id;

  return obj;
});

const Subscriber = mongoose.model("Subscriber", subscriberSchema);

module.exports = Subscriber;

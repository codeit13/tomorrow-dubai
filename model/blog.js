const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  id: { type: String },
  slug: { type: String, unique: true },
  title: { type: String },
  imageUrl: { type: String },
  content: { type: String },
  status: { type: String },
  createdAt: { type: Date },
  updatedAt: { type: Date, default: Date.now },
});

blogSchema.method("transform", () => {
  const obj = this.toObject();

  //Rename fields
  obj.id = obj._id;
  delete obj._id;

  return obj;
});

const blogDB = mongoose.model("blogdb", blogSchema);

module.exports = blogDB;

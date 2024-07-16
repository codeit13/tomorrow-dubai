const mongoose = require("mongoose");
const tinify = require("tinify");
const fs = require("fs");
const { listingDB } = require("../model/listing");

tinify.key = "P6LG99zZGvW7YfSzwZ7WcJsvST8GpqJT";

(async () => {
  await mongoose.connect("mongodb://127.0.0.1/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const listings = await listingDB.find();

  let json = {};
  let counter = 0;
  for (const listing of listings) {
    counter++;
    console.log("****************** ", counter, " ******************");
    const { _id, images } = listing;

    // sleep for 500ms
    await new Promise((resolve) => setTimeout(resolve, 500));

    json[_id] = [];
    await Promise.all(
      images.map(async (url, i) => {
        return new Promise(async (resolve) => {
          try {
            console.log(i + 1, " Compressing::", url);
            const compressedUrl = await tinify.fromUrl(url)._url;
            json[_id].push(compressedUrl);
            resolve(compressedUrl);
          } catch (error) {
            console.log(e.message);
            console.log("JSON:\n", json);
            json[_id].push(url);
            resolve("EMPTY");
          }
        });
      })
    );
  }

  console.log("\n\n\n\n", json);
})();

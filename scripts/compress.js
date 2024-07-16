const mongoose = require("mongoose");
const tinify = require("tinify");
const fs = require("fs");
const path = require("path");
// const { firebase, storage } = require("./firebaseClientConfig");
const { listingDB } = require("../model/listing");

tinify.key = "P6LG99zZGvW7YfSzwZ7WcJsvST8GpqJT";

const authenticateFirebase = async () => {
  // Sign in anonymously (or use any other sign-in method)
  await firebase.auth().signInAnonymously();
};

const uploadToFirebaseStorage = async (filePath, fileName) => {
  const storageRef = storage.ref();
  const fileRef = storageRef.child(`images/${fileName}`);
  const fileData = fs.readFileSync(filePath);
  const metadata = {
    contentType: "image/png",
    cacheControl: "public, max-age=31536000",
  };

  await fileRef.put(fileData, metadata);

  const url = await fileRef.getDownloadURL();
  return url;
};

(async () => {
  await mongoose.connect("mongodb://127.0.0.1/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const listings = await listingDB.find();

  let json = {};

  await Promise.all(
    listings.map(async (listing) => {
      return new Promise(async (r) => {
        const { _id, images } = listing;

        json[_id] = [];
        await Promise.all(
          images.map(async (url) => {
            return new Promise((resolve) => {
              tinify.fromUrl(url)._url.then((url) => {
                json[_id].push(url);
                resolve(url);
              });
            });
          })
        );
        r();
      });

      // await listingDB.updateOne({ _id }, { $set: { images: newImages } });
    })

    // console.log(json);
  );
})();

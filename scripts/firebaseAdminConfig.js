const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json"); // Update this path to your service account JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "sellanyhome-66c20.appspot.com",
});

const bucket = admin.storage().bucket();

module.exports = bucket;

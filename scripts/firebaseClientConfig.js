const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/storage");

const firebaseConfig = {
  apiKey: "AIzaSyDVObfYPR4_Uf29i1CtiPz4R746eIpYtMA",
  authDomain: "sellanyhome-66c20.firebaseapp.com",
  projectId: "sellanyhome-66c20",
  storageBucket: "sellanyhome-66c20.appspot.com",
  messagingSenderId: "681192197284",
  appId: "1:681192197284:web:2c2f01c69ec016c2bbaa31",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

module.exports = { firebase, storage };

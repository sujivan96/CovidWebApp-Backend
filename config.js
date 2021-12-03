const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBKwTES_sXo_wfP8NhpR56VJIh2ccmx2mA",
  authDomain: "covid-f0c95.firebaseapp.com",
  projectId: "covid-f0c95",
  storageBucket: "covid-f0c95.appspot.com",
  messagingSenderId: "445998604607",
  appId: "1:445998604607:web:b12f959ed5078cdeda738a",
  measurementId: "G-TF0C1BHV1W"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Covid = db.collection("Covid19");
module.exports = Covid;

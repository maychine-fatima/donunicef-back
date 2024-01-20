// firebaseConfig.js
const admin = require('firebase-admin');

const serviceAccount = require('./firebase_key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/donunicef-e6785/firestore' // Replace with your Firestore database URL
});

module.exports = admin.firestore();

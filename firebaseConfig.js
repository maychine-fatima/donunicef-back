// firebaseConfig.js
const admin = require('firebase-admin');
const dotenv = require("dotenv");
// initialize admin SDK using serciceAcountKey
dotenv.config();
// GETTING ALL THE CREDENTIAL VIA ENVIROMENT VARIABLE..
const {
  FIRESTORE_TYPE,
  FIRESTORE_PROJECT_ID,
  FIRESTORE_PRIVATE_KEY_ID,
  FIRESTORE_PRIVATE_KEY,
  FIRESTORE_CLIENT_EMAIL,
  FIRESTORE_CLIENT_ID,
  FIRESTORE_AUTH_URI,
  FIRESTORE_TOKEN_URI,
  FIRESTORE_AUTH_PROVIDER_X509_CERT_URL,
  FIRESTORE_CLIENT_X509_CERT_URL
} = process.env;

const serviceAccount = {
    "type": FIRESTORE_TYPE,
    "project_id": FIRESTORE_PROJECT_ID,
    "private_key_id": FIRESTORE_PRIVATE_KEY_ID,
    "private_key": FIRESTORE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    "client_email": FIRESTORE_CLIENT_EMAIL,
    "client_id": FIRESTORE_CLIENT_ID,
    "auth_uri": FIRESTORE_AUTH_URI,
    "token_uri": FIRESTORE_TOKEN_URI,
    "auth_provider_x509_cert_url": FIRESTORE_AUTH_PROVIDER_X509_CERT_URL,
    "client_x509_cert_url": FIRESTORE_CLIENT_X509_CERT_URL,
    "universe_domain": "googleapis.com"
  };

console.log(serviceAccount)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://console.firebase.google.com/u/0/project/donunicef-e6785/firestore' // Replace with your Firestore database URL
});

module.exports = admin.firestore();

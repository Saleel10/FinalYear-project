var admin = require("firebase-admin");

var serviceAccount = require("./secretkey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore(); // Get Firestore database instance

module.exports = { db };

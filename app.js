const express = require("express");
const cors = require("cors");
// Import the Firestore instance
const firestore = require("./firebaseConfig");
const app = express();

// Enable CORS for all routes
app.use(cors());

// fetch data from Firestore
app.get("/getOrganizations", async (req, res) => {
  try {
    const snapshot = await firestore.collection("organizations").get();
    const data = snapshot.docs.map((doc) => doc.data());
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    res.status(500).send("Internal Server Error");
  }
});

// fetch data from Firestore
app.post("/addOrganization", async (req, res) => {
  try {
    const payload = req.body;
    if(!payload){
       res.status(400).json("no payload found");
    }

    // Add a new document to the collection organizations
    firestore
      .collection("organizations")
      .add(newData)
      .then((docRef) => {
        console.log(`Document written with ID: ${docRef.id}`);
        res.status(200).json("added");
      })
      .catch((error) => {
        console.error("Error adding document:", error);
      });
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

// start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

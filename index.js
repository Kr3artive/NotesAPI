const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const notesRoutes = require("./src/notes/note.route");

const index = express();

// Configure environment variables
dotenv.config();

index.use(cors());
index.use(express.json());

const SERVER = process.env.PORT || 5000;
const mongodb = process.env.MongoUrl;

// Connect to MongoDB
mongoose
  .connect(mongodb)
  .then(() => console.log("CONNECTED TO DATABASE"))
  .catch((error) => console.log("CONNECTION ERROR", error));

// Route handlers
index.get("/", (req, res) => {
  res.send("NotesAPI For My DreamGirl SERVER IS ACTIVE...");
});

index.use("/note", notesRoutes); // Use the notes routes

// Start the server
index.listen(SERVER, () => {
  console.log(`SERVER IS ACTIVE AT http://localhost:${SERVER}`);
});

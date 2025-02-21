const express = require("express");
const { addNote, getAllNotes, updateNote, deleteNote } = require("../notes/note.controller");

const router = express.Router();

router.post("/add", addNote);
router.get("/all", getAllNotes);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

module.exports = router;

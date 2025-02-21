const express = require("express");
const { addNote, getAllNotes, getNoteById, updateNote, deleteNote } = require("../notes/note.controller");

const router = express.Router();

router.post("/add", addNote);
router.get("/all", getAllNotes);
router.get("/one/:id", getNoteById);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

module.exports = router;

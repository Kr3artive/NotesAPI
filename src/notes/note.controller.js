const Note = require('../models/notes');

// Add a new note
exports.addNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    await newNote.save();
    res.status(201).json(newNote);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// View all notes
exports.getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Retrieve a single note by ID
exports.getNoteById = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ message: "Note NOT FOUND" });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: "ERROR FETCHING Note", error: error.message });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
    try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedNote) {
      return res.status(404).json({ message: "Note NOT FOUND" });
    }
    res.status(200).json({ message: "Note UPDATED SUCCESSFULLY", updatedNote });
  } catch (error) {
    res.status(500).json({ message: "ERROR UPDATING Note", error: error.message });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note NOT FOUND" });
    }
    res.status(200).json({ message: "Note DELETED SUCCESSFULLY" });
  } catch (error) {
    res.status(500).json({ message: "ERROR DELETING BOOK", error: error.message });
  }
};
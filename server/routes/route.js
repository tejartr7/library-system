import express from "express";
import { Book } from '../mongodb/model.js'; // Fix import path

const router = express();

router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Get a book by id
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Updating a book
router.put("/:id", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ error: "Please enter all details" });
        }
        const { id } = req.params;
        const result = await Book.findByIdAndUpdate(id, req.body);
        if (!result) {
            return res.status(400).json({ error: "Book not found" });
        }
        return res.status(200).json({ message: "Book updated" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a book
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndRemove(id);
        if (!result) {
            return res.status(400).json({ error: "Book not found" });
        }
        return res.status(200).json({ message: "Book deleted" });
    } catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Creating a book
router.post("/", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ error: "Please enter all details" });
        }
        const temp = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear,
        };
        const book = await Book.create(temp);

        return res.status(201).json(book);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

export default router;

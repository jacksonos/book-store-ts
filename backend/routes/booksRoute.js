import express from 'express';
import { Book } from '../Models/bookModel.js';
import validateRequestBody from '../middleware/validateRequestBody.js';

const router = express.Router();

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json(books);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Get a single book
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    return res.status(200).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Create a book
router.post('/', validateRequestBody, async (req, res) => {
  try {
    const { title, author, publishYear, description } = req.body;
    const book = new Book(req.body);
    await book.save();
    return res.status(201).json(book);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Update a book
router.put('/:id', validateRequestBody, async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    return res.status(200).json({ message: 'Book updated successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    return res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
// End of backend/routes/booksRoute.js

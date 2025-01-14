import axios from 'axios';
const API_URL = 'http://localhost:3000/api/books';

interface Book {
  title: string;
  author: string;
  publishYear: number;
  description: string;
}

export const getBooks = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Error fetching books');
  }
};

export const getBookById = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Error fetching book by id');
  }
};

export const createBook = async (book: Book) => {
  try {
    const response = await axios.post(API_URL, book);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Error creating book');
  }
};

export const updateBook = async (id: string, book: Book) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, book);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Error updating book');
  }
};

export const deleteBook = async (id: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    handleServiceError(error, 'Error deleting book');
  }
};

const handleServiceError = (error: unknown, message: string) => {
  console.error(message, error);
  throw new Error(message);
};

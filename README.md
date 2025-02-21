# Book Store Project

This project is a full-stack application for managing a book store. It includes a frontend built with React, TypeScript, and Vite, and a backend built with Node.js, Express, and MongoDB.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Add, edit, delete, and view books.
- Dynamic theming with light, dark, and system modes.
- Form validation using Zod.
- Toast notifications for user feedback.
- Responsive design with Tailwind CSS.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/book-store-ts.git
   cd book-store-ts
   ```

2. Install dependencies for both frontend and backend:

   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Create a `.env` file in the `backend` directory and add your MongoDB connection string and port:

   ```env
   MONGO='your-mongodb-connection-string'
   PORT='5000'
   ```

## Usage

1. Start the backend server:

   ```sh
   cd backend
   npm run dev
   ```

2. Start the frontend development server:

   ```sh
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5174`.

## Project Structure

```
book-store-ts/
├── backend/
│   ├── middleware/
│   │   └── validateRequestBody.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── booksRoute.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   ├── AddEditForm.tsx
│   │   │   ├── BookTable.tsx
│   │   │   ├── CardBook.tsx
│   │   │   └── mode-toggle.tsx
│   │   ├── hooks/
│   │   │   └── use-toast.ts
│   │   ├── pages/
│   │   │   ├── Books.tsx
│   │   │   └── EditAddBook.tsx
│   │   ├── services/
│   │   │   ├── bookService.ts
│   │   │   └── DocumentTitle.ts
│   │   ├── App.css
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── .gitignore
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
├── .gitignore
└── README.md
```

## Scripts

### Frontend

- `npm run dev`: Start the development server.
- `npm run build`: Build the project for production.
- `npm run lint`: Run ESLint.
- `npm run preview`: Preview the production build.

### Backend

- `npm run dev`: Start the development server with nodemon.
- `npm start`: Start the production server.

## Environment Variables

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO='your-mongodb-connection-string'
PORT='5000'
```

## API Endpoints

### Books

- `GET /api/books`: Get all books.
- `GET /api/books/:id`: Get a single book by ID.
- `POST /api/books`: Create a new book.
- `PUT /api/books/:id`: Update a book by ID.
- `DELETE /api/books/:id`: Delete a book by ID.


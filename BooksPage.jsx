import React from "react";
import { useParams } from "react-router-dom";
import { booksData } from "../data.js";
import BookCard from "../components/BookCard";

const BooksPage = () => {
  const { section } = useParams();
  const books = booksData[section];

  if (!books) return <h2>No books found in this section</h2>;

  return (
    <div className="books-page">
      <h2>{section.toUpperCase()} Books</h2>
      <div className="books-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} section={section} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;

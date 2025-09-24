import React from "react";
import { useParams, Link } from "react-router-dom";
import { booksData } from "../data";

const BookDetails = () => {
  const { id } = useParams();
  const book = Object.values(booksData)
    .flat()
    .find((b) => b.id === id);

  if (!book) return <h2>Book not found</h2>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <Link to={-1}>Go Back</Link>
      <Link to={`/borrow/${book.id}`} className="borrow-btn">
        Borrow
      </Link>
    </div>
  );
};

export default BookDetails;

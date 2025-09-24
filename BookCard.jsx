import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
      <Link to={`/borrow/${book.id}`} className="borrow-btn">
        Borrow
      </Link>
    </div>
  );
};

export default BookCard;

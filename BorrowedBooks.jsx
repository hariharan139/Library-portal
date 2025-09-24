import React from "react";

const borrowedBooks = [
  { title: "Thermodynamics", borrower: "John Smith", returnDate: "2024-10-15" },
  {
    title: "Power Systems",
    borrower: "Sarah Johnson",
    returnDate: "2024-10-20",
  },
  {
    title: "Marketing Management",
    borrower: "Mike Davis",
    returnDate: "2024-10-12",
  },
  { title: "The Art of War", borrower: "Lisa Chen", returnDate: "2024-10-18" },
];

function BorrowedBooks() {
  return (
    <div className="borrowed-container">
      <h2 className="borrowed-title">👥 Currently Borrowed Books</h2>

      <div className="borrowed-list">
        {borrowedBooks.map((book, index) => (
          <div className="borrowed-card" key={index}>
            <div className="borrowed-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="borrower">Borrowed by: {book.borrower}</p>
            </div>

            <div className="borrowed-actions">
              <p className="return-date">Return Date: {book.returnDate}</p>
              <button className="waitlist-btn">Join Waitlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BorrowedBooks;

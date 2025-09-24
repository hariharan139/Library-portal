import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BookDetails from "./components/BookDetails";
import StudentForm from "./components/StudentForm";
import NotFound from "./pages/NotFound";
import BorrowedBooks from "./components/BorrowedBooks";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:section" element={<BooksPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/borrow/:id" element={<StudentForm />} />
        <Route path="/borrowed" element={<BorrowedBooks />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

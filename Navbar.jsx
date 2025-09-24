import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Library Portal
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default Navbar;

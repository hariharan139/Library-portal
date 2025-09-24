import React from "react";
import { Link } from "react-router-dom";

const SectionList = () => {
  const sections = ["mechanical", "electrical", "business", "nonfiction"];

  return (
    <div className="section-list">
      <h2>Book Sections</h2>
      <div className="sections">
        {sections.map((sec) => (
          <Link key={sec} to={`/books/${sec}`} className="section-card">
            {sec.toUpperCase()}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SectionList;

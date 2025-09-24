import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const StudentForm = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueToken = uuidv4();
    setToken(uniqueToken);
    setSubmitted(true);
  };

  return (
    <div className="student-form">
      {!submitted ? (
        <>
          <h2>Borrow Book (ID: {id})</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Roll Number"
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <div className="token-display">
          <h3>Success! Show this token at library:</h3>
          <p>{token}</p>
        </div>
      )}
    </div>
  );
};

export default StudentForm;

"use client";

import { useState } from "react";

export default function ValentineForm() {
  const [name, setName] = useState("");
  const [dateDetails, setDateDetails] = useState("");
  const [noPosition, setNoPosition] = useState({ top: "0px", left: "0px" });

  const handleSubmit = async () => {
    const response = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, dateDetails }),
    });

    const result = await response.json();
    alert("Your Valentine invite has been sent! 💌");
  };

  const moveNoButton = () => {
    setNoPosition({
      top: `${Math.random() * 200}px`,
      left: `${Math.random() * 200}px`,
    });
  };

  return (
    <div>
      <label>Your Name:</label>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name"
      />

      <label>Date Details:</label>
      <textarea
        value={dateDetails}
        onChange={(e) => setDateDetails(e.target.value)}
        placeholder="Enter date time & location"
      />

      <button className="yes-button" onClick={handleSubmit}>Yes</button>
      <button className="no-button" 
        onMouseEnter={moveNoButton}
        style={{ position: "absolute", top: noPosition.top, left: noPosition.left }}>
        No
      </button>
    </div>
  );
}

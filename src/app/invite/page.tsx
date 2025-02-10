"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ValentineInvite() {
  const searchParams = useSearchParams();
  const to = searchParams.get("to") || "Someone";
  const date = searchParams.get("date") || "a special day 💖";
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "50%" });

  const moveNoButton = () => {
    const newX = Math.random() * 80 + "%";
    const newY = Math.random() * 80 + "%";
    setNoPosition({ top: newY, left: newX });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
      <h1 className="text-4xl font-bold text-red-600 mb-6">{to}, will you be my Valentine? 💖</h1>
      <p className="text-lg text-gray-800 mb-4">Date: {date}</p>
      <div className="relative flex space-x-4">
        <button
          className="px-6 py-3 text-lg bg-green-500 text-white rounded-lg shadow-lg transform transition hover:scale-110"
          onClick={() => alert("Yay! See you on the date! ❤️")}
        >
          Yes
        </button>
        <button
          className="absolute px-6 py-3 text-lg bg-red-500 text-white rounded-lg shadow-lg"
          style={{ position: "absolute", top: noPosition.top, left: noPosition.left }}
          onMouseEnter={moveNoButton}
        >
          No
        </button>
      </div>
    </div>
  );
}

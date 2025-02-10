"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const router = useRouter();

  const generateLink = () => {
    if (!name) return alert("Please enter a name!");
    router.push(`/invite?to=${encodeURIComponent(name)}&date=${encodeURIComponent(date)}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-100 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Create Your Valentine Invite 💌</h1>
      <input
        type="text"
        placeholder="Your crush's name"
        className="p-2 rounded border border-gray-300 mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Date & time (optional)"
        className="p-2 rounded border border-gray-300 mb-3"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600"
        onClick={generateLink}
      >
        Generate Invite 💖
      </button>
    </div>
  );
}

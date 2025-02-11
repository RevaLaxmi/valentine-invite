"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    message: "",
  });
  const [inviteLink, setInviteLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    const link = `${window.location.origin}/invite/${data.id}`;
    setInviteLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied! 🎉");
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-red-100 p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">Create Your Valentine Invite 💌</h1>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Recipient's Name"
          required
          className="p-2 rounded border border-gray-300 mb-3"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="date"
          required
          className="p-2 rounded border border-gray-300 mb-3"
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          required
          className="p-2 rounded border border-gray-300 mb-3"
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <textarea
          placeholder="Write a cute message..."
          required
          className="p-2 rounded border border-gray-300 mb-3"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
        <button className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow-lg hover:bg-pink-600" type="submit">
          Generate Invite 💖
        </button>
      </form>

      {inviteLink && (
        <div className="mt-4">
          <p>Your invite link: <a href={inviteLink} target="_blank" className="text-blue-500">{inviteLink}</a></p>
          <button className="px-3 py-1 bg-gray-800 text-white rounded-lg mt-2" onClick={copyToClipboard}>
            Copy Link
          </button>
        </div>
      )}
    </main>
  );
}

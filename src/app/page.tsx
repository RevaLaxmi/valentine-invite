"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function InviteForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    location: "",
    message: "",
  });
  const [inviteLink, setInviteLink] = useState("");

  const handleEnvelopeClick = () => {
    setIsOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simulating link generation
    const link = `${window.location.origin}/invite?name=${encodeURIComponent(
      formData.name
    )}&date=${encodeURIComponent(formData.date)}&location=${encodeURIComponent(
      formData.location
    )}&message=${encodeURIComponent(formData.message)}`;

    setInviteLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied! 🎉");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Create Your Valentine Invite 💌</h1>

      {/* Envelope */}
      {!isOpen && (
        <motion.div
          className="relative w-40 h-32 bg-red-500 cursor-pointer flex items-center justify-center"
          onClick={handleEnvelopeClick}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          {/* Flap */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1/2 bg-red-700"
            style={{ clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" }}
            animate={isOpen ? { rotateX: 180, transition: { duration: 0.6 } } : {}}
          />
          {/* Envelope Body */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-red-500"></div>
          <p className="text-white font-bold">Click to Open 💌</p>
        </motion.div>
      )}

      {/* Form Appears when Envelope Opens */}
      {isOpen && (
        <motion.div
          className="bg-white p-6 mt-4 shadow-lg rounded-lg flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
            <input
              type="text"
              placeholder="Recipient's Name"
              className="p-2 rounded border border-pink-300"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="date"
              className="p-2 rounded border border-pink-300"
              required
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="p-2 rounded border border-pink-300"
              required
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
            <textarea
              placeholder="Write a cute message..."
              className="p-2 rounded border border-pink-300"
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <button
              type="submit"
              className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
            >
              Generate Invite
            </button>
          </form>

          {/* Invite Link Section */}
          {inviteLink && (
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700">Your invite link:</p>
              <a href={inviteLink} target="_blank" className="text-blue-500 break-all">
                {inviteLink}
              </a>
              <button
                onClick={copyToClipboard}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Copy Link 📋
              </button>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    message: "",
  });
  const [inviteLink, setInviteLink] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = `${window.location.origin}/invite?to=${encodeURIComponent(
      formData.name
    )}&date=${encodeURIComponent(formData.date)}&time=${encodeURIComponent(
      formData.time
    )}&location=${encodeURIComponent(
      formData.location
    )}&message=${encodeURIComponent(formData.message)}`;
    setInviteLink(link);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied! 🎉");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-6">
      {/* Title with Animation */}
      <motion.h1
        className="text-4xl font-bold text-pink-600 mb-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Create Your Valentine Invite 💌
      </motion.h1>

      {/* Form Container */}
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg border-2 border-pink-400 w-full max-w-md space-y-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <input
          type="text"
          placeholder="Sending to (Name)"
          className="w-full p-2 rounded-lg border border-pink-400 focus:ring-2 focus:ring-pink-300 shadow-sm"
          required
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="date"
          className="w-full p-2 rounded-lg border border-pink-400 focus:ring-2 focus:ring-pink-300 shadow-sm"
          required
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          type="time"
          className="w-full p-2 rounded-lg border border-pink-400 focus:ring-2 focus:ring-pink-300 shadow-sm"
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-2 rounded-lg border border-pink-400 focus:ring-2 focus:ring-pink-300 shadow-sm"
          required
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
        />
        <textarea
          placeholder="Write a cute message..."
          className="w-full p-2 rounded-lg border border-pink-400 focus:ring-2 focus:ring-pink-300 shadow-sm"
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>

        {/* Generate Button */}
        <motion.button
          type="submit"
          className="w-full p-3 rounded-lg bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Generate Invite Link 💖
        </motion.button>
      </motion.form>

      {/* Invite Link Display */}
      {inviteLink && (
        <motion.div
          className="mt-6 p-4 bg-white border-2 border-pink-400 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-pink-600 font-semibold">Your Invite Link:</p>
          <a href={inviteLink} target="_blank" className="text-blue-500 underline">
            {inviteLink}
          </a>
          <motion.button
            className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
            onClick={copyToClipboard}
            whileHover={{ scale: 1.05 }}
          >
            Copy Invite Link
          </motion.button>
        </motion.div>
      )}
    </main>
  );
}

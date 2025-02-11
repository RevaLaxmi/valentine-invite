"use client";
import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";

export default function InvitePage() {
  const params = useParams();
  const id = params?.id as string;

  const [invite, setInvite] = useState<any>(null);
  const [hearts, setHearts] = useState<number[]>([]);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`/api/save`)
      .then((res) => res.json())
      .then((data) => {
        if (data[id]) {
          setInvite(data[id]);
        }
      });
  }, [id]);

  const handleYesClick = () => {
    const newHearts = Array.from({ length: 30 }, (_, i) => i);
    setHearts(newHearts);

    setTimeout(() => setHearts([]), 3000); // Remove hearts after 3 sec
  };

  // Function to make "No" button run away
  const handleNoHover = () => {
    if (noButtonRef.current) {
      const newX = Math.random() * (window.innerWidth - 100);
      const newY = Math.random() * (window.innerHeight - 100);
      noButtonRef.current.style.position = "absolute";
      noButtonRef.current.style.left = `${newX}px`;
      noButtonRef.current.style.top = `${newY}px`;
    }
  };

  if (!invite) return <h1 className="text-center mt-10">Loading invite...</h1>;

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-pink-100 p-6 relative overflow-hidden">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {invite.name}, Will You Be My Valentine? 💖
      </h1>
      <p className="text-xl">📅 Date: {invite.date}</p>
      <p className="text-xl">📍 Location: {invite.location}</p>
      <p className="text-lg italic mt-2">"{invite.message}"</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={handleYesClick}
          className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-transform"
        >
          Yes, I'd Love To! 💕
        </button>
        <button
          ref={noButtonRef}
          className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow-lg cursor-pointer"
          onMouseEnter={handleNoHover} // Moves away when hovered
        >
          No, Sorry...
        </button>
      </div>

      {/* Floating Hearts Animation */}
      {hearts.map((_, index) => (
        <span
          key={index}
          className="heart"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 2 + 2}s`,
          }}
        >
          ❤️
        </span>
      ))}

      <style>
        {`
          .heart {
            position: absolute;
            font-size: 2rem;
            animation: floatUp 3s ease-in-out infinite;
            transform: translateY(100vh);
          }

          @keyframes floatUp {
            0% {
              transform: translateY(100vh) scale(0.5);
              opacity: 1;
            }
            100% {
              transform: translateY(-10vh) scale(1.5);
              opacity: 0;
            }
          }
        `}
      </style>
    </main>
  );
}

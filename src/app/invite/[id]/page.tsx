"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function InvitePage() {
  const params = useParams();
  const id = params?.id as string; // ✅ Explicitly cast to string

  const [invite, setInvite] = useState<any>(null);

  useEffect(() => {
    if (!id) return; // ✅ Ensure ID exists before fetching

    fetch(`/api/save`)
      .then((res) => res.json())
      .then((data) => {
        if (data[id]) {
          setInvite(data[id]);
        }
      });
  }, [id]);

  if (!invite) return <h1 className="text-center mt-10">Loading invite...</h1>;

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-pink-100 p-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">{invite.name}, Will You Be My Valentine? 💖</h1>
      <p className="text-xl">📅 Date: {invite.date}</p>
      <p className="text-xl">📍 Location: {invite.location}</p>
      <p className="text-lg italic mt-2">"{invite.message}"</p>

      <div className="mt-6">
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
          Yes, I'd Love To! 💕
        </button>
        <button
          id="no-btn"
          className="ml-4 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-lg hover:bg-gray-600"
          style={{ position: "absolute" }}
        >
          No, Sorry...
        </button>
      </div>

      <script>
        {`
          document.getElementById("no-btn").addEventListener("mouseover", function() {
            this.style.left = Math.random() * window.innerWidth + "px";
            this.style.top = Math.random() * window.innerHeight + "px";
          });
        `}
      </script>
    </main>
  );
}

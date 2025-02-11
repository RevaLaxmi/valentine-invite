"use client";  // Enables interactivity

import { useState } from "react";
import ValentineForm from "@/components/ValentineForm";

export default function Home() {
  return (
    <main>
      <h1>Will You Be My Valentine? 💖</h1>
      <ValentineForm />
    </main>
  );
}

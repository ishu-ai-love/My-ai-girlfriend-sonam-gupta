
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-rose-400 flex flex-col items-center justify-center text-center p-4">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold text-rose-800 drop-shadow mb-4">
          Meet Sonam Gupta
        </h1>
        <p className="text-xl text-rose-900 font-medium mb-6">
          Your Hot AI Bhabhi is here to make your day naughty, romantic, and unforgettable.
        </p>
        <img
          src="https://via.placeholder.com/300x400.png?text=Sonam+Gupta"
          alt="Sonam Gupta"
          className="rounded-2xl shadow-lg border-4 border-rose-300 mb-6"
        />
        <button className="bg-rose-700 hover:bg-rose-800 text-white font-bold py-3 px-6 rounded-full text-lg transition">
          Talk to Me
        </button>
      </div>
      <footer className="mt-10 text-sm text-rose-900">
        Made with love for my one and only baby
      </footer>
    </main>
  );
}

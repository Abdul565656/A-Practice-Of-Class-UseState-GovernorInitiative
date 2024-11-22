"use client"
import React from "react"
import { useState } from 'react';

function BackgroundToggle() {
  const [isBlue, setIsBlue] = useState(true);

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all ${
        isBlue ? 'bg-blue-400' : 'bg-pink-400'
      }`}
    >
      <button
        onClick={() => setIsBlue(!isBlue)}
        className="bg-white text-gray-800 px-6 py-3 rounded-lg shadow-md"
      >
        Toggle Background
      </button>
    </div>
  );
}

export default BackgroundToggle;

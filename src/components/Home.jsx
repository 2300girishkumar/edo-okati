import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 p-4 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-pink-600 mb-4 font-anime"></h1>
    
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZG679xNJW6OC5I584MC4gAH4X6uCpo-QTg&s" // Replace with your avatar preview
        alt="Avatar"
        className="w-48 h-48 object-contain rounded-full shadow-xl mb-6 animate-fade-in"
      />

      <div className="space-y-3 w-full max-w-xs">
        <button className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-xl shadow">
         💬
        </button>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl shadow">
           📚
        </button>
        <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-xl shadow">
          🏃‍♀️
        </button>
      </div>
    </div>
  );
}

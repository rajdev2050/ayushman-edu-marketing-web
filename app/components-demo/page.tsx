"use client";
import React, { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${search}`);
  };

  const handleSubmit = () => {
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans p-10 space-y-10">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 text-center rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">All Components in One Page</h1>
      </header>

      {/* Search Bar */}
      <section>
        <h2 className="text-xl font-semibold mb-3">🔍 Search Bar</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                       hover:bg-blue-700 transition font-semibold"
          >
            Search
          </button>
        </div>
      </section>

      {/* Input Fields */}
      <section>
        <h2 className="text-xl font-semibold mb-3">📝 Input Fields</h2>
        <div className="flex flex-col gap-4 max-w-sm">
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-xl font-semibold mb-3">🎯 Buttons</h2>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
            Primary
          </button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition font-semibold">
            Secondary
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition font-semibold"
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

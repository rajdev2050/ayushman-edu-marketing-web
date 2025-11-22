"use client";

import React, { useState } from "react";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (query: string) => void;
};

export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
    else alert(`Searching for: ${query}`);
  };

  return (
    <div className="flex items-center gap-2 bg-white p-2 rounded-xl shadow-md w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-lg px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all duration-300 font-medium"
      >
        Search
      </button>
    </div>
  );
}

"use client";
import Button from "@/components/Button";
import React, { FormEvent, useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Searching for: ${search}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(`Name: ${name}\nEmail: ${email}`);
  };

  return (
    <main
      id="main-content"
      className="min-h-screen bg-gray-50 font-sans p-10 space-y-10"
      tabIndex={-1}
    >
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 text-center rounded-lg shadow-md">
        <h1 className="text-2xl font-bold">All Components</h1>
      </header>

      {/* Search Bar */}
      <section aria-labelledby="search-components-heading">
        <h2 className="text-xl font-semibold mb-3" id="search-components-heading">
          🔍 Search Bar
        </h2>
        <form
          role="search"
          aria-label="Search components"
          aria-describedby="component-search-help"
          onSubmit={handleSearchSubmit}
          className="flex items-center gap-2"
        >
          <label htmlFor="component-search" className="sr-only">
            Search for a component
          </label>
          <input
            id="component-search"
            name="component-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-describedby="component-search-help"
          />
          <span id="component-search-help" className="sr-only">
            Enter a term and choose search to trigger the sample alert.
          </span>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg 
                       hover:bg-blue-700 transition font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Search
          </button>
        </form>
      </section>

      {/* Input Fields */}
      <section aria-labelledby="input-fields-heading">
        <h2 className="text-xl font-semibold mb-3" id="input-fields-heading">
          📝 Input Fields
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-sm"
          aria-describedby="input-fields-description"
        >
          <p id="input-fields-description" className="text-sm text-gray-600">
            Complete both fields and submit to preview what would be sent.
          </p>
          <div>
            <label className="block font-medium mb-1" htmlFor="name-input">
              Name
            </label>
            <input
              id="name-input"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              autoComplete="name"
            />
          </div>

          <div>
            <label className="block font-medium mb-1" htmlFor="email-input">
              Email
            </label>
            <input
              id="email-input"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
              autoComplete="email"
              required
            />
          </div>

          <Button
            variant="primary"
            size="medium"
            buttonType="submit"
          >
            Submit details
          </Button>
        </form>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-xl font-semibold mb-3">🎯 Buttons</h2>
        <div className="flex flex-col max-w-sm gap-2">
          <Button
            variant="primary"
            size="medium"
            onClick={() => alert("Primary button clicked")}
          >
            Primary
          </Button>

          <Button
            variant="secondary"
            size="medium"
            onClick={() => alert("Secondary button clicked")}
          >
            Secondary
          </Button>
        </div>
      </section>
    </main>
  );
}

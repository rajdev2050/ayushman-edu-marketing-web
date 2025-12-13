"use client";
import Button from "@/components/Button";
import Checkbox from "@/components/Checkbox";
import Chip from "@/components/Chip";
import Dropdown from "@/components/Dropdown";
import Input from "@/components/Input";
import Radio from "@/components/Radio";
import Tabs from "@/components/Tabs";
import Card from "@/components/Card";
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200  p-10 space-y-12">
      {/* Header */}
      <header className="bg-white shadow-lg rounded-xl py-5 text-center border">
        <h1 className="text-3xl font-extrabold text-gray-800 tracking-wide">
          UI Components Showcase
        </h1>
      </header>

      <div className="max-w-2xl mx-auto space-y-12">
        {/* Search Bar */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            🔍 Search Bar
          </h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search something..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-gray-300 rounded-xl px-4 py-2 
              shadow-sm bg-gray-50
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl 
              hover:bg-blue-700 active:scale-95 transition font-semibold shadow-sm"
            >
              Search
            </button>
          </div>
        </section>

        {/* Input Fields */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Input Fields
          </h2>
          <div className="flex flex-col gap-5">
            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-gray-300 w-full rounded-xl px-4 py-2 
                bg-gray-50 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 w-full rounded-xl px-4 py-2 
                bg-gray-50 shadow-sm
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="mt-2 bg-green-600 text-white px-5 py-2.5 rounded-xl 
              hover:bg-green-700 active:scale-95 transition font-semibold shadow-md"
            >
              Submit
            </button>
          </div>
        </section>

        {/* Buttons */}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">🎯 Buttons</h2>

          <div className="flex flex-col gap-3 max-w-xs">
            <Button
              type="primary"
              size="medium"
              onClick={() => alert("Primary button clicked")}
            >
              Primary Button
            </Button>

            <Button
              type="secondary"
              size="medium"
              onClick={() => alert("Secondary button clicked")}
            >
              Secondary Button
            </Button>
          </div>
        </section>

        {/*Input*/}

        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Input Component
          </h2>
          <Input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </section>

        {/*Radio*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Radio Component
          </h2>
          <Radio label="1Button" name="radio" checked={true} value="radio" />
          <Radio label="2 Button" name="radio" checked={false} value="radio" />
        </section>

        {/*Checkbox*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Checkbox Component
          </h2>
          <Checkbox
            label="Checkbox 1"
            checked={true}
            onChange={() => alert("Checkbox clicked")}
          />
          <Checkbox label="Checkbox 2" checked={false} onChange={() => {}} />
        </section>

        {/*Dropdown*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Dropdown Component
          </h2>
          <Dropdown
            options={[
              { label: "Option 1", value: "option1" },
              { label: "india", value: "india" },
              { label: "usa", value: "usa" },
              { label: "uk", value: "uk" },
              { label: "canada", value: "canada" },
              { label: "australia", value: "australia" },
              { label: "new zealand", value: "new zealand" },
              { label: "south africa", value: "south africa" },
              { label: "south africa", value: "south africa" },
            ]}
          />
        </section>
        {/*Tabs*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Tabs Component
          </h2>
          <Tabs
            tabs={[
              { label: "Tab 1", content: <div>Tab 1</div> },
              { label: "Tab 2", content: <div>Tab 2</div> },
            ]}
          />
        </section>

        {/*Chip*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Chip Component
          </h2>
          <Chip label="Chip" onRemove={() => alert("Chip removed")} />
        </section>
        {/*Button*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Button Component
          </h2>
          <Button
            type="primary"
            size="medium"
            onClick={() => alert("Button clicked")}
          >
            Button
          </Button>
        </section>

        {/*Card*/}
        <section className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📝 Card Component
          </h2>
          <Card title="Card" description="Card description" />
        </section>
      </div>
    </div>
  );
}

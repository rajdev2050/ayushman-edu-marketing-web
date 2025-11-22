"use client";

import React, { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

export default function Tabs(props: TabsProps) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Tab Buttons */}
      <div className="flex gap-8 border-b mb-8 pb-4">
        {props.tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`px-10 w-full text-center pb-5 transition duration-300 ${
              active === index
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Content */}
      <div>{props.tabs[active].content}</div>
    </>
  );
}

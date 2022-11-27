import React, { useState } from "react";

const options = [
  "Business",
  "Education",
  "Finance",
  "Food & Drink",
  "Health & Fitness",
  "Lifestyle",
  "Medical",
  "Music",
  "Navigation",
  "News",
  "Photo & Video",
  "Productivity",
  "Reference",
  "Shopping",
  "Social Networking",
  "Sports",
  "Travel",
  "Utilities",
];
function AppCategories({ setCategory, category }) {
  function handleChange(e) {
    setCategory(e.target.value);
  }

  return (
    <div className="app-cate">
      <h2>App Categories</h2>
      <div className="scroll">
        <select
          className="scroll-down"
          name="types"
          value={category}
          onChange={handleChange}
        >
          <option value="all">All</option>
          {options.map((option, index) => (
            <option value={option} key={index}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AppCategories;

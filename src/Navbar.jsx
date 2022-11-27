import React, { useState } from "react";

function Navbar({ setKeys, keys }) {
  function onSearch(e) {
    setKeys(e.target.value.toLowerCase());
  }

  return (
    <nav>
      <a className="logo" href="#">
        Th3 Log
      </a>
      <input
        className="search-bar"
        type="text"
        placeholder="Search Apps"
        value={keys}
        onChange={onSearch}
      />
      <span></span>
    </nav>
  );
}

export default Navbar;

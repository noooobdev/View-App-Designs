import { useState } from "react";
import Navbar from "./Navbar";
import AppCategories from "./AppCategories";
import Card from "./Card";
import "./App.css";

function App() {
  const [platform, setPlatform] = useState("all");
  const [category, setCategory] = useState("all");
  const [keys, setKeys] = useState("");

  function handleChange(e) {
    setPlatform(e.target.value);
  }

  return (
    <div className="App">
      <Navbar setKeys={setKeys} keys={keys} />
      <div className="top-section">
        <div>
          <div className="left-menu">
            <div className="browse">
              <h2>Browse Here</h2>
              <select
                className="scroll-down"
                value={platform}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value="android">Android</option>
                <option value="ios">Ios</option>
                <option value="web">Web</option>
              </select>
            </div>
            <AppCategories setCategory={setCategory} category={category} />
          </div>
          <Card platform={platform} category={category} keys={keys} />
        </div>
      </div>
    </div>
  );
}

export default App;

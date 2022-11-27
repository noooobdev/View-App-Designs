import React, { useState, useEffect } from "react";
import axios from "axios";
// 12143 lines
const Card = ({ platform, category, keys }) => {
  const [appData, setAppData] = useState([]);

  useEffect(() => {
    axios.get("data.json").then((res) => setAppData(res.data));
  }, []);

  return (
    <div className="cards">
      {appData &&
        appData
          .filter((app) =>
            platform === "all" ? app : app.platform === platform
          )
          .filter((type) =>
            category === "all" ? type : type.appCategory === category
          )
          .filter((search) => search.appName.toLowerCase().includes(keys))
          .map((apps) => (
            <div key={appData.id} className="card">
              <div className="head">
                <img className="card-logo" src={apps.appLogoUrl} />
                <div className="card-content">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <h2 className="card-title">{apps.appName}</h2>
                    <span className="badge">{apps.platform}</span>
                  </div>
                  <p className="card-category">{apps.appCategory}</p>
                  <a
                    className="card-link"
                    href={`https://www.mobbin.com/apps/${apps.id}`}
                    target="_blank"
                  >
                    OPEN
                  </a>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default Card;

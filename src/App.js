import React, { useState, useEffect } from "react";
import "./App.css";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import * as accessData from "./data/accessData.json";
require("dotenv").config();

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 3,
  });

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedUser(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="App">
      <div>
        <div>Herbarium Map User</div>
        <div className="Map">
          <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle="mapbox://styles/hongyuli/ckfyugxgd0nwg19qp9pkto8t2"
            onViewportChange={(viewport) => {
              setViewport(viewport);
            }}
          >
            {accessData.features.map((accessUser) => (
              <Marker
                key={accessUser.properties.id}
                latitude={accessUser.geometry.coordinates[1]}
                longitude={accessUser.geometry.coordinates[0]}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedUser(accessUser);
                  }}
                >
                  <img src="/hr.svg" alt="Herbrium Icon" />
                </button>
              </Marker>
            ))}
            {selectedUser ? (
              <Popup
                latitude={selectedUser.geometry.coordinates[1]}
                longitude={selectedUser.geometry.coordinates[0]}
                onClose={() => {
                  setSelectedUser(null);
                }}
              >
                <div>
                  <h2>{selectedUser.properties.name}</h2>
                  <p>id: {selectedUser.properties.id}</p>
                  <p>Access From: {selectedUser.properties.city}</p>
                  <p>Access Date: {selectedUser.properties.accessDate}</p>
                  <p>
                    Accessed Herbrium :{" "}
                    {selectedUser.properties.AccessedHerbrium.name}
                  </p>
                  <button>
                    <a href="www.fakelink.com">Detailed Info</a>
                  </button>
                </div>
              </Popup>
            ) : null}
          </ReactMapGL>
        </div>
      </div>
    </div>
  );
}

export default App;

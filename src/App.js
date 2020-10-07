import React, {useState} from 'react';
import './App.css';
import ReactMapGL from "react-map-gl";
require('dotenv').config();

function App() {
  const [viewport, setViewport] = useState({
    width: "100vw",
    height: "100vh",
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  return (
    <div className="App">
      <div>
        <div>
          Herbarium Map
        </div>
        <div className = "Map">
        <ReactMapGL 
          {...viewport}
          mapboxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
          onViewportChange = { viewport => {
            setViewport(viewport);
          }}
        >Markers</ReactMapGL>
        </div>
      </div>
    </div>
  );
}

export default App;

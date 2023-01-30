import React, { useState, useEffect } from "react";
import "./index.css";
import Header from "./components/Header";
import StarShipCard from "./components/StarShipCard";
import { getAllStarships } from "./services/sw-api";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    getAllStarships().then((data) => {
      console.log(data.results);
      setStarships(data.results);
    });
  }, []);

  return (
    <div className="App">
      <Header title="STAR WARS STARSHIPS" />
      <div className="starships-container">
        {starships.map((starship) => (
          <StarShipCard key={starship.name} starship={starship} />
        ))}
      </div>
    </div>
  );
}

export default App;

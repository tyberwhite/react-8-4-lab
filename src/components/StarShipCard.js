import React from "react";

// "StarShipCard" accepts a "starship" prop and displays it's name.
export default function StarShipCard({ starship }) {
  return (
    <div className="starship-card">
      <h2>{starship.name}</h2>
      <div className="ship-stats">
        <p>
          <span className="stats-title">Manufacturer:</span>{" "}
          {starship.manufacturer}
        </p>
        <p>
          <span className="stats-title">Cost:</span> {starship.cost_in_credits}{" "}
          Credits
        </p>
      </div>
    </div>
  );
}

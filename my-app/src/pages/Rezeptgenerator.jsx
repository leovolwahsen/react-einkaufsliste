import React from "react";
import "./rezeptgenerator.css";
import rezeptDaten from "../Daten/rezepte.json";
import { useState } from "react";

export default function Rezeptgenerator() {
  const [zufälligesRezept, setZufälligesRezept] = useState(null);

  const bekommeZufallsRezept = () => {
    const zufälligerIndex = Math.floor(Math.random() * rezeptDaten.length);
    setZufälligesRezept(rezeptDaten[zufälligerIndex]);
  };

  return (
    <div className="rezept-container">
      <div className="center-componente">
        <h1>Rezeptgenerator</h1>
        <button onClick={bekommeZufallsRezept} className="btn-rezept">
          zufälliges Rezept gennerieren
        </button>

        {zufälligesRezept && (
          <div className="generierte-rezeptur">
            <h2>{zufälligesRezept.titel}</h2>
            <p>{zufälligesRezept.beschreibung}</p>
            <ul>
              {zufälligesRezept.zutaten.map((zutat, index) => (
                <li key={index} className="generierte-listenwerte" >{zutat}</li>
              ))}
            </ul>
            <p>Anleitung: {zufälligesRezept.anleitung}</p>
          </div>
        )}
      </div>
    </div>
  );
}

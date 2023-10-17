import { useState } from "react";
import "./einkaufsliste.css";

export default function Einkaufliste() {
  const [eingabeWert, setEingabeWert] = useState("");
  const [liste, setListe] = useState([]);

  function formAbschicken(event) {
    event.preventDefault();

    if (eingabeWert) {
      setListe([...liste, eingabeWert]);
      setEingabeWert("");
    }
  }

  function löscheWert(index) {
    const aktualisierteListe = liste.filter((produkt, i) => i !== index);
    setListe(aktualisierteListe);
  }

  return (
    <div className="einkaufsliste-container">
      <div className="einkauf-werte">
        <h2>Einkaufsliste</h2>
        <form onSubmit={formAbschicken} className="input-btn-hintergrund">
          <input
            className="input"
            type="text"
            value={eingabeWert}
            onChange={(event) => setEingabeWert(event.target.value)}
          />
          <button className="btnHinzufügen" type="submit">
            Hinzufügen
          </button>
        </form>

        <ul className="list-container">
          {liste.map((produkt, index) => (
            <li 
              key={index} 
              onClick={() => löscheWert(index)} 
              className="list"
            >
              {produkt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

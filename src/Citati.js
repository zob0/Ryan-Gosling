import React from "react";
import "./citati.css";
const Citati = () => {
  const handleCitat = () => {
    window.location.href = "/citat";
  };

  return (
    <div className="Citati_div">
      <div className="Lista-citata">
        <h1 className="Citati-naslov1">Kako se osecate danas?</h1>
        <textarea
          className="Citati-textArea1"
          rows="15"
          cols="50"
          placeholder="Napisite kako se osecate..."
        ></textarea>
        <button className="Citati-generisi" onClick={handleCitat}>
          GENERISI
        </button>
      </div>
    </div>
  );
};

export default Citati;

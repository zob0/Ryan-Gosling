import React, { useState } from "react";
import nijecekirano from "./images/1.png";
import cekirano from "./images/2.png";

const Navika = ({ navika }) => {
  const [checked, setChecked] = useState(navika.checked);

  const handleToggle = () => {
    let temp = checked;
    setChecked(!checked);
    let todayElement = document.getElementsByClassName("today")[0];
    let currentAlpha = parseFloat(
      getComputedStyle(todayElement).backgroundColor.split(",")[3]
    );
    let newAlpha = checked ? currentAlpha - 0.2 : currentAlpha + 0.2; // Toggle between 0.5 and 0.8 alpha
    todayElement.style.backgroundColor = "rgba(255, 0, 0, " + newAlpha + ")";
  };
  return (
    <div className="n-polje">
      <button className="n-checkbox" onClick={handleToggle}>
        {checked && <img src={cekirano} className="n-dugme unchecked"></img>}
        {!checked && <img src={nijecekirano} className="n-dugme checked"></img>}
      </button>
      <p className="n-input">{navika.text}</p>
    </div>
  );
};

export default Navika;

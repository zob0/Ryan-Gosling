import React, { useState } from "react";
import ryangif from "./images/ryangif.gif";
import selfi from "./images/selfi.png";
import "./Selfi.css";

const Selfi = () => {
  const [pictureTaken, setPictureTaken] = useState(false);
  const handlePicture = () => {
    setPictureTaken(true);
  };
  return (
    <div className="centered-image">
      <div className="kamera-okvir">
        {pictureTaken && <img src={selfi} className="selfi-image" />}
        {!pictureTaken && <img src={ryangif} className="selfi-image" />}
        <div className="krug" onClick={handlePicture}></div>
      </div>
    </div>
  );
};

export default Selfi;

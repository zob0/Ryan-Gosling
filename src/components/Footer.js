import React, { useState } from "react";
import kamerica from "./images/kamera.svg";
import "./Footer.css";
const Footer = () => {
  const selfiHandler = () => {
    if (window.confirm("Dozvoli pristup kameri")) {
      window.location.href = "/selfi";
    } else {
      window.location.href = "/selfi";
    }
  };
  return (
    <div>
      <footer className="footeric">
        <div className="selfi" onClick={selfiHandler}>
          <img src={kamerica} alt="" height="50px" className="kamera"></img>
          <p className="selfi-tekst">Slikaj selfi!</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

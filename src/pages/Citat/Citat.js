import React from "react";
import "./Citat.css";
import memoryReboot from "./audio/memoryReboot.mp3";
const Citat = () => {
  return (
    <div className="citat-container">
      <h1 className="citat-naslov">I drive</h1>
      <audio
        autoPlay
        loop
        controls={false}
        style={{ display: "none" }}
        src={memoryReboot}
      />
    </div>
  );
};

export default Citat;

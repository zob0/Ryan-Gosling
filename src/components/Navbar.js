import React from "react";
import "./Navbar.css";
import slika from "./images/best.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbarlevo">
          <img src={slika} alt="Ryan Gosling" height="50px" className="logo" />
        </div>
        <div className="navbardesno">
          <ul className="lista">
            <Link to="/" style={{ textDecoration: 'none', color:'#3E226B' }}>
            <li>
              <p className="list-element">Kalendar</p>
            </li>
            </Link>
            <Link to="/citati" style={{ textDecoration: 'none', color:'#3E226B' }}>
            <li>
              <p className="list-element">Citati</p>
            </li>
            </Link>
            
            <Link to="/o_nama" style={{ textDecoration: 'none', color:'#3E226B' }}>
            <li>
              <p className="list-element">O nama</p>
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

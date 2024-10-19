// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
// import './Navbardemo.css';
import pin from "./Images/pin.png";
// import './Headers.css';
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import Partthree from "./Partthree";
import Partfive from "./Partfive";
import Partsix from "./Partsix";
import Partseven from "./Partseven";
import Parteight from "./Parteight";
// import Headers from "./Headers";
import Footers from "./Footers";
import Home from "./Home";
import { NavLink } from "react-router-dom";
import Gallery from "./gallery";
import Contactus from "./Contactus";
import Darpan from "./darpan";
function Navbardemothree() {
  return (
    // <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0 m-0">
        <div className="container-fluid pt-5">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                <div className="logo" style={{ backgroundColor: "#e83d56" }}>
                  <img src={pin} alt="Logo" />
                </div>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link text-white hoverit">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/aboutus">ABOUT US</a> */}
                <Link to={"/About1"} className="nav-link text-white hoverit">
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/gallery"} className="nav-link text-white hoverit">
                  GALLERY
                </Link>
                {/* <a className="nav-link active" aria-current="page" href=""></a> */}
              </li>
              <li className="nav-item">
                <Link to={"/partseven"} className="nav-link text-white hoverit">
                  LOCATION
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/parteight"} className="nav-link text-white hoverit">
                  TESTIMONIAL
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/contactus"} className="nav-link text-white hoverit">
                  CONTACT US
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

  )}
import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            Bronx Science NHS
          </a> */}
          <NavLink className="navbar-brand" to="/">Bronx Science NHS</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon className="faBars" icon={faBars} />
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/join">Join</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/current">Current Members</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/tutoring">Tutoring</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/faq">FAQ</NavLink>
              </li>

              <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  );
}

import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
      <nav className="navbar sticky-top navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Bronx Science NHS
          </a>
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
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/join">
                  Join Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/current">
                  Current Members
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/tutoring">
                  Tutoring
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/FAQ">
                  FAQ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  );
}

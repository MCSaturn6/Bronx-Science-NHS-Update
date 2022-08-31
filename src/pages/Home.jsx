import React, { Component } from "react";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPeopleGroup, faHandsHoldingCircle, faPersonChalkboard, faFaceGrin, faFaceSaluting} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <section class="home-first-half">
        <h1 class="school-name">Bronx High School of Science</h1>
        <h1 class="nhs-name">National Honor Society</h1>
      </section>

      <section class="home-bottom-half">
        <div className="stats-container">
          <div className="stats-item stats-item-3">
            <img
              className="home-images"
              src={require("../images/johann-sitting-open-house.png")}
            />
          </div>
          <div class="stats-item stats-item-2">Scholarship.</div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-2">Service.</div>
          <div class="stats-item stats-item-1">
            <img
              class="home-images"
              src={require("../images/johann-sitting-open-house.png")}
            />
          </div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-3">
            <img
              class="home-images"
              src={require("../images/johann-sitting-open-house.png")}
            />
          </div>
          <div class="stats-item stats-item-2">Leadership.</div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-2">Character.</div>
          <div class="stats-item stats-item-1">
            <img
              class="home-images"
              src={require("../images/johann-sitting-open-house.png")}
            />
          </div>
        </div>

        <h2 className="numbers-heading">Bronx Science NHS 2021-2022</h2>
        <div class="numbers">
          <div class="numbers-item numbers-item-1">
            <FontAwesomeIcon className="numbers-item numbers-icon" icon={faPeopleGroup}></FontAwesomeIcon>
            <h4>400+ Members</h4>
          </div>
          <div class="numbers-item numbers-item-1">
          <FontAwesomeIcon className="numbers-item numbers-icon" icon={faHandsHoldingCircle}></FontAwesomeIcon>
            <h4>700+ Projects</h4>
          </div>
          <div class="numbers-item numbers-item-1">
          <FontAwesomeIcon className="numbers-item numbers-icon" icon={faFaceGrin}></FontAwesomeIcon>
            <h4>1000+ Service</h4>
          </div>
          <div class="numbers-item numbers-item-1">
          <FontAwesomeIcon className="numbers-item numbers-icon" icon={faPersonChalkboard}></FontAwesomeIcon>
            <h4>400+ Tutoring</h4>
          </div>
        </div>
      </section>
    </>
  );
}

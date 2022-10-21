import React, { Component } from "react";
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
              src={require("../images/Bronx Science College Supplement Help 2.jpg")}
            />
          </div>
          <div class="stats-item stats-item-2">Scholarship.</div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-2">Service.</div>
          <div class="stats-item stats-item-1">
            <img
              class="home-images"
              src={require("../images/AtomHacks 2.jpg")}
            />
          </div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-3">
            <img
              class="home-images"
              src={require("../images/Holocaust Speaker Event 2.jpg")}
            />
          </div>
          <div class="stats-item stats-item-2">Leadership.</div>
        </div>

        <div class="stats-container">
          <div class="stats-item stats-item-2">Character.</div>
          <div class="stats-item stats-item-1">
            <img
              class="home-images"
              src={require("../images/Spring Carnival.png")}
            />
          </div>
        </div>

      </section>
    </>
  );
}

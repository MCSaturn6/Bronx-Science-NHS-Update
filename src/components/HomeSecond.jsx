import React, { Component } from "react";

export default function HomeSecond() {
  return (
    <section class="home-bottom-half">
      <div className="stats-container">
        <div className="stats-item stats-item-1">
          <img
            className="home-images"
            src="../images/johann-sitting-open-house.png"
          />
        </div>
        <div class="stats-item stats-item-2">Scholarship.</div>
      </div>

      <div class="stats-container">
        <div class="stats-item stats-item-2">Service.</div>
        <div class="stats-item stats-item-1">
          <img
            class="home-images"
            src="../images/johann-sitting-open-house.png"
          />
        </div>
      </div>

      <div class="stats-container">
        <div class="stats-item stats-item-1">
          <img
            class="home-images"
            src="../images/johann-sitting-open-house.png"
          />
        </div>
        <div class="stats-item stats-item-2">Leadership.</div>
      </div>

      <div class="stats-container">
        <div class="stats-item stats-item-2">Character.</div>
        <div class="stats-item stats-item-1">
          <img class="home-images" src="images/johann-sitting-open-house.png" />
        </div>
      </div>

      <h2 class="numbers-heading">NHS 21-22</h2>
      <div class="numbers">
        <div class="numbers-item numbers-item-1">
          <i class="numbers-item fa-solid fa-people-group numbers-icon"></i>
          <h4>400+ Members</h4>
        </div>
        <div class="numbers-item numbers-item-1">
          <i class="numbers-item fa-solid fa-hands-holding-circle numbers-icon"></i>
          <h4>700+ Projects</h4>
        </div>
        <div class="numbers-item numbers-item-1">
          <i class="numbers-item fa-solid fa-person-rays numbers-icon"></i>
          <h4>1000+ Service</h4>
        </div>
        <div class="numbers-item numbers-item-1">
          <i class="numbers-item fa-solid fa-person-chalkboard numbers-icon"></i>
          <h4>400+ Tutoring</h4>
        </div>
      </div>
    </section>
  );
}

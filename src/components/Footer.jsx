import React, { Component } from "react";

export default function Footer(){
    return (
      <React.Fragment>
         <div class="footer-container">
        <div class="footer">
          <div class="footer-heading footer-1">
            <h2>About Us</h2>
            <a href="about.html#what">NHS</a>
            <a href="about.html#board">Board</a>
          </div>

          <div class="footer-heading footer-2">
            <h2>Applying</h2>
            <a href="join.html#junior-req">Junior</a>
            <a href="join.html#senior-req">Senior</a>
            <a href="join.html#credit-table">Credit Table</a>
          </div>

          <div class="footer-heading footer-3">
            <h2>Current Members</h2>
            <a href="current.html#membership">Membership</a>
            <a href="current.html#attendance">Attendance</a>
            <a href="current.html#credits">Credits & Probations</a>
            <a href="current.html#forms">Forms</a>
          </div>

          <div class="footer-heading footer-4">
            <h2>Connect</h2>
            <a href="contact.html">Contact Us</a>
            <a href="tutoring.html">Tutoring</a>
            <a href="faq.html">Fequently Asked Questions</a>
          </div>
        </div>
        <p>Bronx Science National Honor Society | Website by Jeffrey Li ’23</p>
      </div>
      </React.Fragment>

    );
  }


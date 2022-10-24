import React from "react";

export default function Footer(){
    return (
      <React.Fragment>
         <div class="footer-container">
        <div class="footer">
          <div class="footer-heading footer-1">
            <h2>About Us</h2>
            <a href="/about#what">NHS</a>
            <a href="/about#board">Board</a>
          </div>

          <div class="footer-heading footer-2">
            <h2>Applying</h2>
            <a href="/apply#credit-req">Credit Requirements</a>
            <a href="/apply#credit-table">Credit Table</a>
          </div>

          <div class="footer-heading footer-3">
            <h2>Current Members</h2>
            <a href="/current#membership">Membership</a>
            <a href="/current#attendance">Attendance</a>
            <a href="/current#probations">Probations</a>
          </div>

          <div class="footer-heading footer-4">
            <h2>Connect</h2>
            <a href="/tutoring">Tutoring</a>
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <p>Bronx Science National Honor Society</p>
      </div>
      </React.Fragment>

    );
  }


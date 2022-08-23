import React, { Component } from "react";
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.css';

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg" style="background-color: #204559;">
      <div class="container-fluid">
         <a class="navbar-brand" href="index.html">Bronx Science NHS</a>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <i class="fa-solid fa-bars" style="color:white; font-size:25px;"></i>
         </button>

         <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">


               <li class="nav-item">
                  <a class="nav-link" href="about.html">About</a>
               </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Join Us
                  </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="join.html">Join Us</a></li>
                     <li>
                        <hr class="dropdown-divider"/>
                     </li>
                     <li><a class="dropdown-item" href="join.html#junior-req">Junior Requirements</a></li>
                     <li><a class="dropdown-item" href="join.html#senior-req">Senior Requirements</a></li>
                     <li><a class="dropdown-item" href="join.html#credit-table">Credit Table</a></li>
                  </ul>
               </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="current.html" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Current Members
                  </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="current.html">Current Members</a></li>
                     <li>
                        <hr class="dropdown-divider"/>
                     </li>
                     <li><a class="dropdown-item" href="current.html#membership">Membership</a></li>
                     <li><a class="dropdown-item" href="current.html#attendance">Attendance</a></li>
                     <li><a class="dropdown-item" href="current.html#credits">Credits</a></li>
                     <li><a class="dropdown-item" href="current.html#forms">Forms</a></li>
                  </ul>
               </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="tutoring.html" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     Tutoring
                  </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="tutoring.html">Tutoring</a></li>
                     <li>
                        <hr class="dropdown-divider"/>
                     </li>
                     <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
               </li>

               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="faq.html" role="button" data-bs-toggle="dropdown"
                     aria-expanded="false">
                     FAQ
                  </a>
                  <ul class="dropdown-menu">
                     <li><a class="dropdown-item" href="faq.html">FAQ</a></li>
                     <li>
                        <hr class="dropdown-divider"/>
                     </li>
                     <li><a class="dropdown-item" href="faq.html#apply">Applying</a></li>
                     <li><a class="dropdown-item" href="faq.html#tutoring">Tutoring</a></li>
                  </ul>
               </li>

               <li class="nav-item">
                  <a class="nav-link" href="contact.html">Contact</a>
               </li>

            </ul>

         </div>
      </div>
   </nav>
    );
  }
}

export default Navbar;

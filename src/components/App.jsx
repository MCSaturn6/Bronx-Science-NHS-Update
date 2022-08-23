import React, { Component } from "react";
import "../styles.css";
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <Footer/>
      </div>

    );
  }
}

export default App;

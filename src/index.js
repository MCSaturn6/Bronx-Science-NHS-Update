import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import App from "./components/App.jsx";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
   <BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));
   <SpeedInsights />


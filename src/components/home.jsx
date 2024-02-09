import React from "react";
import kantipur from "../assets/kantipur.jpg";
import "./styles/home.css";
import Innernav from "./innernav";

function Main() {
  return (
    <div className="mainimg">
      <div className="overlay">
        <div className="nav">
          <Innernav />
        </div>
        <div className="info">
          <h2>“QUALITY EDUCATION FOR LEADERSHIP”</h2>
          <h1>Kantipur Engineering College</h1>
          <h3>"From Campus to the Community"</h3>
        </div>
      </div>
    </div>
  );
}

export default Main;

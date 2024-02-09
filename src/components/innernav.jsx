import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo.png";
import "./innernav.css";

function Innernav() {
  return (
    <div className="innernav">
      <div className="leftNav">
        <ul>
          <li>
            <a href="#" target="_blank">
              Home
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              About KEC
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              KEC Online
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Admission
            </a>
          </li>
        </ul>
      </div>

      <div className="logo">
        <img src={logo} alt="KEC Logo" />
      </div>
      <div className="RightNav">
        <ul>
          <li>
            <a href="#" target="_blank">
              Academics
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              School & Colleges
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              News & Notices
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Innernav;

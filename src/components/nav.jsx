import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/nav.css";

function Nav() {
  return (
    <div className="Navbar">
      <div className="leftNav">
        <ul>
          <li>
            <a href="#" target="_blank">
              Examination
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Publications
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Students
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Research
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
      <div className="RightNav">
        <ul>
          <li>
            <a href="#" target="_blank">
              Phone:+977-1-5229204
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;

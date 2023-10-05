import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../footer/footer.css";

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContainer">
        <div className="columnsContainer">
          {/* <div className="column">
            <h4 className="title fspace">FAQ</h4>
          </div> */}
          <div className="column test">
            <h4 className="title">Site Links</h4>
            <ul className="footerSiteLinks">
              <li className="textColor">
                <Link to="/">Home </Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <div className="column gin">
            <h4 className="title mar">Social Media</h4>
            <div className="footerSocialLinks">
              <a className="space" href="https://www.facebook.com/yourpage">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="space" href="https://www.twitter.com/yourpage">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="space" href="https://www.instagram.com/yourpage">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright information */}
        <div className="copyright">
          <p>&copy; 2023 | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

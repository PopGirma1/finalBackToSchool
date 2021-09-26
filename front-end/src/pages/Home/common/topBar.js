import React, { Component } from "react";
import { Link } from "react-router-dom";
import LottieAnimation from "../../ContactUs/lotiContact";
import lotiContact from "../../ContactUs/contactus1.json";

export default class TopBar extends Component {
  render() {
    return (
      <section id="topbar" className="d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <Link to="mailto:back2schooleth@gmail.com">
                back2schooleth@gmail.com
              </Link>
            </i>
            <i className="bi bi-telephone d-flex align-items-center ms-4">
              <span>+251-974 082037</span>
            </i>

            <i className="bi bi-telephone d-flex align-items-center ms-4">
              <span><LottieAnimation lotti={lotiContact} height={60} width={120} /></span>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <Link
              to="https://www.facebook.com/B2SXET"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </Link>
            <Link
              to="https://twitter.com/NoosphereAffair"
              className="twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </Link>
            <Link
              to="https://www.linkedin.com/feed/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCtMJNlZtDqH57ICrdRI_lvw"
              target="_blank"
              rel="noopener noreferrer"
              className="youtube"
            >
              <i className="bi bi-youtube"></i>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

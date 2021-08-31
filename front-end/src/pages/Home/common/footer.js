import React from "react";
import logo from "../assets/images/backtoschollogo.png";
export const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3 id="logo" className="logo">
                <a href="/">
                  <img src={logo} alt="Back To School Logo" />
                </a>
              </h3>
              <p>
                Firdu Commercial Building,
                <br />
                3rd Floor Office no 308
                <br />
                Ethiopia ,Addis Ababa
                <br />
                <br />
                <i className="bi bi-phone"></i>
                +251-974 082036
                <br />
                <strong>
                  {" "}
                  <i className="bi bi-envelope"></i>
                </strong>{" "}
                back2schooleth@gmail.com
                <br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Side Events</a>
                </li>
                <li>
                  <a href="/">Hackhaton</a>
                </li>
                <li>
                  <a href="/">Exhibitors</a>
                </li>
                <li>
                  <a href="/">Testimonials & Gallery</a>
                </li>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                <li>
                  <a href="/">About Us</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="/">Terms of service</a>
                </li>
                <li>
                  <a href="/">Privacy policy</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>

              <div className="social-links mt-3">
                <a href="https://www.facebook.com/B2SXET" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com/NoosphereAffair"
                  className="twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/feed/" className="linkedin">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCtMJNlZtDqH57ICrdRI_lvw"
                  className="youtube"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <div className="copyright">
          BackToSchoolEthiopia &copy; Copyright{" "}
          <strong>
            <span></span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

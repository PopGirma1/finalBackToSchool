import React, { Component } from "react";
import logo from "../assets/images/backtoschollogo.png";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  render() {
    return (
      <header id="header" className="d-flex align-items-center">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <nav
            id="navbar"
            className=" container-fluid navbar navbar-expand-lg navbar-light  align-items-center "
            role="navigation"
          >
            <Link to="/" className="logo">
              <img src={logo} alt="" />
            </Link>
            <button
              className="navbar-toggler btn-outline-light ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/SideEvents">
                    Side Events
                  </Link>
                </li>
                {this.props.getToken() ? (
                  <li className="nav-item">
                    <Link className="nav-link" to="/Hackhaton">
                      Hackhaton
                    </Link>
                  </li>
                ) : (
                  <p></p>
                )}

                <li className="nav-item">
                  <Link className="nav-link " to="/Exhibitor">
                    Exhibitors
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TestimonialAndGallery">
                    Testimonials & Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

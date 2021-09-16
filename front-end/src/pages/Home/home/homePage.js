import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "../home/carousel.js";
import { PartenersList } from "./partenersList.js";
import { SecondPoster } from "./secondPoster.js";
<<<<<<< HEAD
import { RegisterSection } from "./registerSection.js";
import Testimonialandgallery from "../common/testimonialandgallery.js";
=======
import  RegisterSection  from "./registerSection.js";
import { Testimonialandgallery } from "../common/testimonialandgallery.js";
import {scroller} from "react-scroll";
>>>>>>> 3f2a5b053d4889e847d8b1a7c6005caba18de951
export default class HomePage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <React.Fragment>
          <div onClick={scrollToSection}><Carousel/></div>
          <div><PartenersList /></div>
          <div><SecondPoster /></div>
          <div><Testimonialandgallery /></div>
          <div className="register"><RegisterSection /></div>
      </React.Fragment>
    );
  }
}

const   scrollToSection = () => {
    scroller.scrollTo("register", {
        duration: 1000,
        delay: 0,
        smooth: "easeInOutQuart",
    });
}

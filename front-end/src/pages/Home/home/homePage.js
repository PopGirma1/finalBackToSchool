import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "../home/carousel.js";
import { PartenersList } from "./partenersList.js";
import { SecondPoster } from "./secondPoster.js";
import { RegisterSection } from "./registerSection.js";
import { Testimonialandgallery } from "../common/testimonialandgallery.js";
export default class HomePage extends Component {
  static propTypes = {
    prop: PropTypes,
  };

  render() {
    return (
      <>
        <Carousel />
        <PartenersList />
        <SecondPoster />
        <Testimonialandgallery />
        <RegisterSection />
      </>
    );
  }
}

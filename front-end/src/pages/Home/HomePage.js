import React, { Component } from "react";
import PropTypes from "prop-types";
import { Carousel } from "./Carousel.js";
import { PartenersList } from "./PartenersList.js";
import { SecondPoster } from "./SecondPoster.js";
import { RegisterSection } from "./RegisterSection.js";
import { Testimonialandgallery } from "./Testimonialandgallery.js";
export default class HomePage extends Component {
    static propTypes = {
        prop: PropTypes,
    };

    render() {
        return (
            <div>
                <Carousel />
                <PartenersList />
                <SecondPoster />
                <Testimonialandgallery />
                <RegisterSection />
            </div>
        );
    }
}

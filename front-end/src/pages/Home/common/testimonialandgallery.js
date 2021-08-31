import React from "react";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";
import gallery9 from "../assets/images/gallery9.jpg";

export const Testimonialandgallery = () => {
  return (
    <section id="testimonial" className="testimonial">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h3>
            Our <span>Gallery</span>
          </h3>
        </div>

        <div className="row" data-aos="fade-up" data-aos-delay="100">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="testimonial-flters">
              <li data-filter="*" className="filter-active">
                Photos
              </li>
              <li data-filter=".filter-app">Video</li>
              <li data-filter=".filter-card">Testimonial</li>
              <li data-filter=".filter-web">Audios</li>
            </ul>
          </div>
        </div>

        <div
          className="row testimonial-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="col-lg-4 col-md-6 testimonial-item filter-app">
            <img src={gallery1} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-web">
            <img src={gallery2} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-app">
            <img src={gallery3} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-card">
            <img src={gallery4} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-web">
            <img src={gallery5} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-app">
            <img src={gallery6} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-card">
            <img src={gallery7} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-card">
            <img src={gallery8} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 testimonial-item filter-web">
            <img src={gallery9} className="img-fluid" alt="" />
            <div className="testimonial-info">
              <h4>Info</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

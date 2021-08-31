import React from "react";

export const PartenersList = () => {
    return (
        <section id="parteners" className="parteners" data-aos="fade-up">
            <div className="container" data-aos="zoom-in">
                <div className="row">
                    <div className="col-lg-4  ">
                        <div className="col d-flex align-items-center justify-content-center">
                            <img src='/assets/images/noospherelogo.png' className="img-fluid" alt="" />
                        </div>
                        <span className="partenersName">
              <p>Founder/Organizer</p>
            </span>
                    </div>

                    <div className="col-lg-4 align-items-center justify-content-center ">
                        <div className="col d-flex align-items-center justify-content-center">
                            <img src='/assets/images/aviationAcademyLogo.png' className="img-fluid" alt="" />
                        </div>
                        <span className="partenersName">
              <p>Exclusive Official Partner</p>
            </span>
                    </div>

                    <div className="col-lg-4  ">
                        <div className="col d-flex align-items-center justify-content-center">
                            <img src='/assets/images/intellectualSchoolLogo.png' className="img-fluid" alt="" />
                        </div>
                        <span className="partenersName">
              <p>Education Partner</p>
            </span>
                    </div>
                </div>
            </div>
            <div className="collaboration container-fluid align-items-start justify-content-start">
                <h2>In Collabration With </h2>
                <div className="container">
                    <ul className="col align-items-start justify-content-start">
                        <li className="d-flex align-items-center justify-content-center">
                            <i class="bi bi-star"></i>
                            <div>
                                <h5>FDRE Ministry of Technology & Innovation </h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center justify-content-center">
                            <i class="bi bi-star"></i>
                            <div>
                                <h5>Ministry of Science & Higher Education </h5>
                            </div>
                        </li>
                        <li className="d-flex align-items-center justify-content-center">
                            <i class="bi bi-star"></i>
                            <div>
                                <h5>FDRE Office of the Prime Minster </h5>
                            </div>
                        </li>
                        <li
                            id="parteneritems"
                            className="d-flex align-items-center justify-content-center"
                        >
                            <i class="bi bi-star"></i>

                            <div>
                                <h5>FDRE Ministry of Education</h5>
                            </div>
                        </li>

                        <li className="d-flex align-items-center justify-content-center">
                            <i class="bi bi-star"></i>

                            <div>
                                <h5>Abrehot Library </h5>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

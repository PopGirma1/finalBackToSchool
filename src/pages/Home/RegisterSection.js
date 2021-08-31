import React from "react";

export const RegisterSection = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h3>
                        <span>Register Now</span>
                    </h3>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <form action="" method="post" className="register-form">
                            <div className=" form-group">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className=" form-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="phonenumber"
                                    id="phonenumber"
                                    placeholder="Phone Number"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="company"
                                    id="company"
                                    placeholder="Company"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Country"
                                    id="Country"
                                    placeholder="Country"
                                    required
                                />
                            </div>
                            <div className="form-group">
                <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    placeholder="Message"
                    required
                ></textarea>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 ">
                        <iframe
                            title="map"
                            className="mb-4 mb-lg-0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3512717568565!2d38.755158364835765!3d9.031685441433574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85f13face90f%3A0x5cf68b9e8b6cf775!2sFirdu%20Commercial%20Center!5e0!3m2!1sen!2set!4v1630355584920!5m2!1sen!2set"
                            frameborder="0"
                            style={{ border: "0", width: "100%", height: "500px" }}
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

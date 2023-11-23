import React from "react";
import { BrowserRouter as Router, Route, Routes ,Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="container mt-5 pt-5 pb-3">
        <div className="d-flex flex-column text-center mb-5">
          <h4 className="text-secondary mb-3">Team Member</h4>
          <h1 className="display-4 m-0">
            Meet Our <span className="text-primary">Team Members</span>
          </h1>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" src="img/team-1.jpg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Bhavya Rao Yadav</h5>
                  <i>Founder & CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                  <a
                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          

          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" src="img/team-1.jpg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Anshuman</h5>
                  <i>Co-Founder</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                  <a
                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" src="img/team-1.jpg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>Anushka shrivastav</h5>
                  <i>Ass-CEO</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                  <a
                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
              <img className="card-img-top" src="img/team-1.jpg" alt="" />
              <div className="card-body text-center p-0">
                <div className="team-text d-flex flex-column justify-content-center bg-light">
                  <h5>bhuvan sri chandra v </h5>
                  <i>President</i>
                </div>
                <div className="team-social d-flex align-items-center justify-content-center bg-dark">
                  <a
                    className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                    style={{ width: "36px", height: "36px" }}
                    href="#"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="team card position-relative overflow-hidden border-0 mb-4">
          <img className="card-img-top" src="img/team-1.jpg" alt="" />
          <div className="card-body text-center p-0">
            <div className="team-text d-flex flex-column justify-content-center bg-light">
              <h5>hari krishnan m</h5>
              <i>Supretendant</i>
            </div>
            <div className="team-social d-flex align-items-center justify-content-center bg-dark">
              <a
                className="btn btn-outline-primary rounded-circle text-center mr-2 px-0"
                style={{ width: "36px", height: "36px" }}
                href="#"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
        </div>
    </>
  );
};

export default About;

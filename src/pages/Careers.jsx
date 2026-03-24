import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import careerImg from "../images/work.jpg"; // use your image path

function Careers() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Careers" />

      {/* JOB SEARCH SECTION */}
      <section className="jobs-section">
        <div className="container">

          <h2 className="jobs-main-title">
            Find Your Perfect Job Match
          </h2>

          <p className="jobs-subtitle">
            Find Jobs, Employment & Career Opportunities
          </p>

          <div className="job-search-box">
            <input
              type="text"
              placeholder="Job title, keywords..."
              className="job-input"
            />

            <input
              type="text"
              placeholder="Location"
              className="job-input"
            />

            <button className="job-btn">Find Jobs</button>
          </div>

          <p className="popular-searches">
            <strong>Popular Searches :</strong> Designer, Developer, Web,
            IOS, PHP, Senior, Engineer
          </p>

        </div>
      </section>

      {/* CAREERS CONTENT SECTION */}
      <section className="careers-content">
        <div className="container">

          <h2 className="careers-title">CAREERS</h2>

          <div className="careers-grid">

            {/* Left Image */}
            <div className="careers-image">
              <img src={careerImg} alt="Career" />
            </div>

            {/* Right Content */}
            <div className="careers-text">
              <h3>Why Work for PVS?</h3>
              <p>
                At PVS, you will find an environment that encourages innovation,
                imagination and dedication. Our employee's dedication,
                commitment and delivery of results will take us far.
              </p>

              <h3>Total Rewards</h3>
              <p>
                Employees are offered an agile yet balanced work atmosphere,
                incentive compensation and benefits that are industry comparable.
              </p>

              <h3>Professional Development Programs</h3>
              <p>
                PVS offers its resources Technical Professional Development
                Program to help them align with dynamic technological changes
                in the industry.
              </p>
            </div>

          </div>

        </div>
      </section>


    </>
  );
}

export default Careers;
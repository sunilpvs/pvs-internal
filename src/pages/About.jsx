import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <PageHeader title="About" />

      {/* ABOUT SECTION */}
      <section className="about-us-section">
        <div className="container">

          <h2 className="about-us-title">About PVS CONSULTANCY</h2>

          <p className="about-us-text">
            <strong>PVS Consultancy</strong> brings its clients closer to employees.
            Factoring in all the aspects of the current and future state of affairs,
            the company redefines the future of resourcing and consulting. We are
            specialized in providing technical expertise in the Communications &
            Technology Industries, enabling our clients to increase efficiency,
            user experience and capture new opportunities in their space.
          </p>

          <p className="about-us-text">
            Incepted in 2011, with offices in India, Malaysia, and the UK,
            we cater to the manpower requirements of our clients scattered
            across different geographical regions of the globe.
          </p>

          <p className="about-us-text">
            Through Consulting and Resourcing we offer a range of services
            to all the major Technology and Communication providers across the globe.
          </p>

          {/* CORE VALUES */}
          <h2 className="core-title">Our Core Values</h2>

          <div className="core-values">

            <div className="core-item">
              <h4>Integrity</h4>
              <p>We adopt the highest standards of professional ethics, transparency, and uprightness.</p>
            </div>

            <div className="core-item">
              <h4>Perseverance</h4>
              <p>We are always in it for the long term and deliver on our commitments with determination and resilience.</p>
            </div>

            <div className="core-item">
              <h4>Mutual Respect</h4>
              <p>Through mutual respect, we value employees for their qualities, abilities, and accomplishments.</p>
            </div>

            <div className="core-item">
              <h4>Synergy</h4>
              <p>We believe synergy between people at various levels produces greater results than individual effort.</p>
            </div>

            <div className="core-item">
              <h4>Work Commitment</h4>
              <p>Committed employees share the company’s goals, mission, and vision.</p>
            </div>

            <div className="core-item">
              <h4>Accountability</h4>
              <p>Employees who feel responsible perform their duties conscientiously and efficiently.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Your Dream Jobs Are Waiting</h2>
          <div className="cta-buttons">
            <button className="light-btn">Search Job</button>
            <button className="yellow-btn">Apply Job Now</button>
          </div>
        </div>
      </section>

    </>
  );
}

export default About;
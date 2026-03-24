import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import icon1 from "../images/f1.jpg";
import icon2 from "../images/f2.jpg";
import icon3 from "../images/f3.png";

function Services() {
  return (
    <>
      {/* Page Header */}
      <PageHeader title="Services" />

      {/* SERVICES SECTION */}
      <section className="services-page">
        <div className="container">

          <h2 className="services-title">How can we help you?</h2>

          <div className="core-grid">

            <div className="core-card active">
              <img src={icon1} alt="Staffing" />
              <h4>Staffing Solutions - ICT</h4>
              <p>
                Active resource mapping across the globe to the customers need
                and continuously engaging with resources to maintain real-time
                track on availability along with Local Compliance & Payroll.
              </p>
            </div>

            <div className="core-card">
              <img src={icon2} alt="Software" />
              <h4>Software Development</h4>
              <p>
                Designing, programming, documenting, testing and maintaining
                applications and frameworks as per customer needs.
              </p>
            </div>

            <div className="core-card">
              <img src={icon3} alt="Automation" />
              <h4>Automations</h4>
              <p>
                Consultancy expertise across the full software lifecycle
                using Atlassian, IBM, Microsoft and open-source tools.
              </p>
            </div>

            <div className="core-card">
              <img src={icon1} alt="Managed" />
              <h4>Managed Services</h4>
              <p>
                Outsourcing responsibility for maintaining processes
                to improve operations and reduce costs.
              </p>
            </div>

            <div className="core-card">
              <img src={icon2} alt="Testing" />
              <h4>Testing Services</h4>
              <p>
                Testing as a Service (TaaS) model providing outsourced
                testing expertise and consulting.
              </p>
            </div>

            <div className="core-card">
              <img src={icon3} alt="Support" />
              <h4>Remote Support</h4>
              <p>
                Secure remote access to manage networks, devices,
                configurations and enterprise services.
              </p>
            </div>

          </div>

          <div className="text-center">
            <button className="primary-btn">Get in Touch</button>
          </div>

        </div>
      </section>

      {/* WHAT WE DO TITLE */}
      <section className="what-we-do-title">
        <h2>What We Do</h2>
      </section>

      {/* BLUE CTA SECTION */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Your Dream Jobs Are Waiting</h2>
          <p>
            Over 1 million interactions, 50,000 success stories. Make yours now.
          </p>

          <div className="cta-buttons">
            <button className="light-btn">Search Job</button>
            <button className="yellow-btn">Apply Job Now</button>
          </div>
        </div>
      </section>

    </>
  );
}

export default Services;
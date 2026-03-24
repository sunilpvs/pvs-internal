import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <PageHeader title="Contact" />

      {/* MAP SECTION */}
      <section className="map-section">
        <div className="container map-grid">

          <iframe
            title="Malaysia Map"
            src="https://www.google.com/maps?q=Puchong+Malaysia&output=embed"
            className="map-frame"
          ></iframe>

          <iframe
            title="UK Map"
            src="https://www.google.com/maps?q=27+Old+Gloucester+Street+London&output=embed"
            className="map-frame"
          ></iframe>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="container contact-grid">

          {/* LEFT FORM */}
          <div className="contact-form">

            <div className="form-group">
              <label>Organization Name *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Contact Person *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Email Address" />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input type="text" />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-group">
              <label>Comment or Message *</label>
              <textarea rows="4" placeholder="message"></textarea>
            </div>

            <button className="submit-btn">Submit</button>

          </div>

          {/* RIGHT OFFICES */}
          <div className="contact-offices">

            <div className="office-block">
              <h4>📍 PVS INDIA Office:</h4>
              <p>
                PVS CONSULTANCY SERVICES<br />
                NCC Urban Gardenia,<br />
                Hitech City Main Rd,<br />
                Gachibowli,<br />
                Hyderabad,<br />
                Telangana 500032
              </p>
            </div>

            <div className="office-block">
              <h4>📍 PVS MALAYSIA Office:</h4>
              <p>
                PVS CONSULTANCY SERVICES SDN BHD<br />
                IO-105, 5th Floor, Block I,<br />
                SetiaWalk, Persiaran Wawasan,<br />
                Puchong, Malaysia<br />
                T: +603-74 94-6037
              </p>
            </div>

            <div className="office-block">
              <h4>📍 PVS UK Office:</h4>
              <p>
                PVS CONSULTANCY SERVICES LIMITED<br />
                27 Old Gloucester Street,<br />
                London, United Kingdom,<br />
                WC1N 3AX
              </p>
            </div>

          </div>

        </div>
      </section>

    </>
  );
}

export default Contact;
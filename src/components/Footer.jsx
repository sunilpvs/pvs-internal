import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../images/PVS_LOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top container">
        {/* Logo Section */}
        <div className="footer-col logo-col">
         <div className="logo">
          <img src={logo} alt="PVS Logo" />
        </div>
        </div>

        {/* India Office */}
        <div className="footer-col">
          <h4>PVS INDIA Office:</h4>
          <p>
            PVS CONSULTANCY SERVICES <br />
            NCC Urban Gardenia, <br />
            Hitech City Main Rd, <br />
            Gachibowli, Hyderabad, <br />
            Telangana 500032
          </p>
        </div>

        {/* Malaysia Office */}
        <div className="footer-col">
          <h4>PVS MALAYSIA Office:</h4>
          <p>
            PVS CONSULTANCY SERVICES SDN BHD (1062045-W) <br />
            I-01-05, 5th Floor, Block I, SetiaWalk, <br />
            Persiaran Wawasan, 47160 Puchong, <br />
            Selangor Darul Ehsan, Malaysia. <br />
            T: +603-74 94-6037
          </p>
        </div>

        {/* UK Office */}
        <div className="footer-col">
          <h4>PVS UK Office:</h4>
          <p>
            PVS CONSULTANCY SERVICES LIMITED (11141759) <br />
            27 Old Gloucester Street, London, <br />
            United Kingdom, WC1N 3AX
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>About Us</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>© 2023 PVS Consultancy. All Right Reserved.</p>

          <div className="social-icons">
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-skype"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
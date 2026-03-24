import React from "react";
import bannerBg from "../images/bg-slider2.jpg";
import heroMan from "../images/slider2.png";
import icon1 from "../images/f1.jpg";
import icon2 from "../images/f2.jpg";
import icon3 from "../images/f3.png";
import aboutImg from "../images/work.jpg";
import projectBg from "../images/bg-h15.jpg";
import whyImg from "../images/tab2.jpg";
import client1 from "../images/erission-2.png";
import client2 from "../images/umobile-1.png";
import idea1 from "../images/gallery-3.jpg";

import "../App.css";

function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bannerBg})` }}
      >
        <div className="container hero-content">

          <div className="hero-left">
            <h2>
              <span className="highlight">PVS Consultancy</span> That Thrives on
              Your Success Talented People In One Place
            </h2>

            <p>
              If you are looking for a Consultancy company to help you create
              remarkable technical solutions, resource pool or project execution,
              you've come to the right place.
            </p>

            <button className="hero-btn">Find out how!</button>
          </div>

          <div className="hero-right">
            <img src={heroMan} alt="Hero" className="hero-person" />
          </div>

        </div>
      </section>


      {/* CORE SECTION */}
      <section className="core-section">
        <div className="container">

          <h2 className="core-title">CORE</h2>

          <p className="core-description">
            We are a specialized in providing technical expertise in the 
            communications & Technology Industry, enabling our clients 
            increase efficiency, user experience and capture new opportunities in their Space. </p>

<p className="core-description">Through Consulting and Resourcing we offer a range of 
services to all the major Technology and Communication 
providers across the globe. The Portfolio of 
services we offer in the space includes…..</p>
          

         <h3 className="look-title">Look Us For</h3>

<div className="core-grid">

  <div className="core-card active">
    <img src={icon1} alt="Staffing" />
    <h4 className="look-box-heading">Staffing Solutions - ICT</h4>
    <p>
      Active resource mapping across the globe to the customers need and continuously engaging with 
      resources to maintain real-time track on their availability along with management of Local Compliance, Payroll.
    </p>
  </div>

  <div className="core-card">
    <img src={icon2} alt="Software" />
    <h4 className="look-box-heading">Software Development</h4>
    <p>
      Conceiving, specifying, designing, programming, documenting, testing, and bug fixing in 
      creating and maintaining applications, frameworks, or other software 
      components as per needs of customer. We deal with most of IT based application developments.
    </p>
  </div>

  <div className="core-card">
    <img src={icon3} alt="Automation" />
    <h4 className="look-box-heading">Automations</h4>
    <p>
      CIOs, IT project managers, test managers, 
      and heads of development in IT needs a consultancy 
      to turn for expertise across the whole software lifecycle. 
      Our staff use the latest lifecycle tools from the major vendors 
      (including Atlassian, IBM and Microsoft) as well as open source solutions, 
      to meet specific software lifecycle challenges for automation.
    </p>
  </div>

  <div className="core-card">
    <img src={icon1} alt="Managed" />
    <h4 className="look-box-heading">Managed Services</h4>
    <p>
      Managed services is the practice of outsourcing the responsibility for 
      maintaining, and anticipating need for, a range of processes and functions, 
      ostensibly for the purpose of improved operations and reduced budgetary 
      expenditures through the reduction of directly-employed staff.
    </p>
  </div>

  <div className="core-card">
    <img src={icon2}  alt="Testing" />
    <h4 className="look-box-heading">Testing Services</h4>
    <p>
      Testing as a service (TaaS) is an outsourcing model in 
      which testing activities associated with some of an organization’s 
      business activities are performed by a service provider rather than 
      in-house employees. TaaS may involve engaging consultants to help and 
      advise employees or simply outsourcing an area of testing to a service provider. 
      Usually, a company will still do some testing in-house.
    </p>
  </div>

  <div className="core-card">
    <img src={icon3}  alt="Support" />
    <h4 className="look-box-heading">Remote Support</h4>
    <p>
      Capability to access and control our customers network and 
      devices in a reliable and secure way remotely to deliver our 
      services either it be a solution implementation, 
      creating or editing a configuration to manage entire services.
    </p>
  </div>

</div>

{/* ABOUT SECTION */}
<section className="about-section">
  <div className="container about-container">

    <div className="about-left">
      
<img src={aboutImg} alt="About PVS" />
    </div>

    <div className="about-right">
      <h2>About PVS</h2>

      <p>
        PVS Consultancy brings its clients closer to employees. Factoring in
        all the aspects of the current and future state of affairs, the company
        redefines the future of resourcing and consulting.
      </p>

      <p>
        We are specialized in providing technical expertise in the communications
        & Technology industries, enabling our clients increase efficiency,
        user experience and capture new opportunities in their space.
        Incepted in 2011, with offices in India, Malaysia, and the UK,
        we cater to manpower requirements across the globe.
      </p>

      <p>
        Through Consulting and Resourcing we offer a range of services to
        major Technology and Communication providers worldwide.
      </p>

      <button className="about-btn">Read More</button>
    </div>

  </div>
</section>

{/* WHAT WE DO SECTION */}
<section className="jobs-section">
  <div className="container">

    <h4 className="jobs-small-title">What We Do</h4>

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

{/* VISION & MISSION SECTION */}
<section className="vision-mission-section">
  <div className="container vision-mission-container">

    {/* Vision Card */}
    <div className="vm-card vision-card">
      <div className="vm-content">
        <h2>Vision</h2>
        <p>
          PVS aims at becoming innovation led Products and Services Company.
        </p>
        <button className="vm-btn">Careers</button>
      </div>

    </div>

    {/* Mission Card */}
    <div className="vm-card mission-card">
      <div className="vm-content">
        <h2>Mission</h2>
        <p>
          PVS aims to see our clients smile to thrive on their success.
        </p>
        <button className="vm-btn">Services</button>
      </div>

    
    </div>

  </div>
</section>


{/* CLIENTS SECTION */}
{/* CLIENT SECTION */}
<div className="clients-section">
  <h5 className="client-title">Our Clients</h5>

  <div className="client-grid">

    <div className="client-card">
     
      <img src={client1} alt="Ericsson Malaysia" />
       <h6>Ericsson Malaysia</h6>
    </div>

    <div className="client-card">
      <img src={client1} alt="Ericsson Singapore" />
      <h6>Ericsson Singapore</h6>
     
    </div>

    <div className="client-card">
      <img src={client1} alt="Ericsson Indonesia" />
      <h6>Ericsson Indonesia</h6>
      
    </div>

    <div className="client-card">
      <img src={client1} alt="Ericsson Iran" />
      <h6>Ericsson Iran</h6>
     
    </div>

     <div className="client-card">
      <img src={client2} alt="TCS" />
      <h6>Umobile Malaysia</h6>
     
    </div>

    

  </div>
</div>


{/* WHY CHOOSE US */}
<section className="why-section">
  <div className="container why-container">

    <div className="why-left">
      <img src={whyImg} alt="Why Choose Us" />
    </div>

    <div className="why-right">
      <h2>Why Choose Us?</h2>
      <p>
        With us you'll feel heard. We listen to our client requirements
        and then select the right solution that fits. We care for your
        business as our own. We take a sincere interest in it and
        genuinely want to help your company reach its potential.
      </p>

      <div className="values-list">

        <div className="value-item">
          <h4>Integrity</h4>
          <p>We adopt the highest standards of professional ethics, transparency, and uprightness.</p>
        </div>

        <div className="value-item">
          <h4>Perseverance</h4>
          <p>We are always in it for the long term and deliver on our commitments with determination.</p>
        </div>

        <div className="value-item">
          <h4>Mutual Respect</h4>
          <p>Through mutual respect, we value employees for their qualities and accomplishments.</p>
        </div>

        <div className="value-item">
          <h4>Synergy</h4>
          <p>We believe synergy between people produces greater results than individual effort.</p>
        </div>

        <div className="value-item">
          <h4>Work Commitment</h4>
          <p>Commitment is at the heart of partnership and shared company goals.</p>
        </div>

        <div className="value-item">
          <h4>Accountability</h4>
          <p>Employees who feel responsible perform their duties efficiently and conscientiously.</p>
        </div>

      </div>
    </div>

  </div>
</section>


{/* PROJECT SECTION */}
<section
  className="project-section"
  style={{ backgroundImage: `url(${projectBg})` }}
>
  <div className="project-overlay"></div>

  <div className="container project-content">
    <h2>Have a Project on mind?</h2>
    <p>
      Superior offers a way to completely optimize your entire recruiting process.
      Find better candidates, conduct more focused interviews, and make data-driven hiring decisions.
    </p>
    <button className="project-btn">CONNECT WITH US!</button>
  </div>
</section>


{/* INNOVATIVE SECTION */}
<section className="innovative-section">
  <div className="container">

    <div className="innovative-header">
      <div>
        <h2>Highly Motivated Team with Innovative Ideas</h2>
        <p>We always strive to become your trusted partner!</p>
      </div>

      <p>
        We love what we do and therefore come up with the best possible
        solutions to help you set and grow online quickly.
      </p>
    </div>

    <div className="innovative-grid">
      <img src={idea1} alt="Idea 1" />
      <img src={idea1} alt="Idea 2" />
      <img src={idea1} alt="Idea 3" />
    </div>

  </div>
</section>


{/* CTA BANNER */}
<section className="container">
  <div className="cta-banner">
    <div className="cta-container">

      <div className="cta-left">
        <h2>Let us together build a flourishing business</h2>
      </div>

      <div className="cta-right">
        <p>
          When connected with us, you aren’t growing your business alone.
          We back you and put in our best to contribute to your growth.
        </p>
      </div>

    </div>
  </div>
</section>




        </div>
      </section>
    </>
  );
}

export default Home;
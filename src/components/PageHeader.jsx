import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const PageHeader = ({ title }) => {
  return (
    <section className="page-header">
      <div className="container text-center">
        <h1 className="page-title">{title}</h1>

        <div className="breadcrumb-wrapper">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator"> / </span>
          <span className="breadcrumb-current">{title}</span>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
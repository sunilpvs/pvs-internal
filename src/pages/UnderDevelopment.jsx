import { Link } from "react-router-dom";
import "./UnderDevelopment.css";

function UnderDevelopment() {
  return (
    <section className="under-dev-page">
      <div className="under-dev-bg under-dev-bg-one"></div>
      <div className="under-dev-bg under-dev-bg-two"></div>

      <div className="under-dev-card">
        <div className="under-dev-animation" aria-hidden="true">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="core-dot"></div>
        </div>

        <p className="under-dev-kicker">Work In Progress</p>
        <h1>Under Development</h1>
        <p className="under-dev-copy">
          This area is currently being developed. Please check back soon.
        </p>

        <div className="under-dev-progress" aria-hidden="true">
          <span></span>
        </div>

        <div className="under-dev-actions">
          <Link to="/" className="under-dev-btn primary">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}

export default UnderDevelopment;

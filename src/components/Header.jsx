import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../images/PVS_LOGO.png";
import { AppContext } from "../context/AppContext";
import { logoutUser } from "../services/auth/auth";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../App.css";

function Header() {
  const location = useLocation();
  const { userData, isLoading } = useContext(AppContext);

  const [hrOpen, setHrOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const apiBaseUrl = `${(process.env.REACT_APP_API_BASE_URL || "").replace(/\/+$/, "")}/`;
  const authURL = `${apiBaseUrl}auth/auth.php`;
  const vmsPortalUrl = process.env.REACT_APP_VMS_PORTAL_URL;
  const amsPortalUrl = process.env.REACT_APP_AMS_PORTAL_URL;
  const adminPortalUrl = process.env.REACT_APP_ADMIN_PORTAL_URL;
  const cmsPortalUrl = process.env.REACT_APP_CMS_PORTAL_URL;
  const policyUrl = process.env.REACT_APP_POLICY_URL;

  const isLoggedIn = Boolean(userData);

  const handleLogout = async () => {
    await logoutUser();
  };

  return (
    <header className="main-header">
      <div className="container header-container">

        {/* LOGO */}
        <div className="logo">
          <img src={logo} alt="PVS Logo" />
        </div>

        {/* NAVIGATION */}
        <nav className="nav-menu">
          <Link className={location.pathname === "/" ? "active" : ""} to="/">HOME</Link>
          <Link to="/about">ABOUT US</Link>
          <Link to="/services">SERVICES</Link>
          <Link to="/careers">CAREERS</Link>
          <Link to="/contact">CONTACT</Link>

          {/* AFTER LOGIN */}
          {!isLoading && isLoggedIn && (
            <>
              {/* HUMAN RESOURCES */}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => setHrOpen(true)}
                onMouseLeave={() => setTimeout(() => setHrOpen(false), 200)}
              >
                <span className="dropdown-trigger">HUMAN RESOURCES ▾</span>

                <div className={`dropdown-menu-simple nav-flyout ${hrOpen ? "show" : ""}`}>
                  <Link to="/holiday-calendar" target="_blank" rel="noopener noreferrer">
                    Holiday Calendar
                  </Link>
                  {policyUrl && (
                    <a
                      href={policyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tools-external-link"
                    >
                      <span>Policies</span>
                      <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                    </a>
                  )}
                </div>
              </div>

              {/* TOOLS */}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setTimeout(() => setToolsOpen(false), 200)}
              >
                <span className="dropdown-trigger">TOOLS ▾</span>

                <div className={`dropdown-menu-simple nav-flyout ${toolsOpen ? "show" : ""}`}>
                  {vmsPortalUrl && (
                    <a href={vmsPortalUrl} target="_blank" rel="noopener noreferrer" className="tools-external-link">
                      <span>Vendor Management System(VMS)</span>
                      <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                    </a>
                  )}
                  {amsPortalUrl && (
                    <a href={amsPortalUrl} target="_blank" rel="noopener noreferrer" className="tools-external-link">
                      <span>Asset Management System(AMS)</span>
                      <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                    </a>
                  )}
                  {adminPortalUrl && (
                    <a href={adminPortalUrl} target="_blank" rel="noopener noreferrer" className="tools-external-link">
                      <span>Admin Portal</span>
                      <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                    </a>
                  )}
                  {cmsPortalUrl && (
                    <a href={cmsPortalUrl} target="_blank" rel="noopener noreferrer" className="tools-external-link">
                      <span>Rice Module (CMS)</span>
                      <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
                    </a>
                  )}
                </div>
              </div>

              {/* PROFILE */}
             
              <div
  className="nav-item dropdown"
  onMouseEnter={() => setProfileOpen(true)}
  onMouseLeave={() => setProfileOpen(false)}
>
 <span className="dropdown-trigger profile-trigger">
  <span className="profile-icon-svg">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 
      0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
    </svg>
  </span>
  PROFILE ▾
</span>

  <div className={`ms-dropdown ${profileOpen ? "show" : ""}`}>

    {/* 🔥 Top Profile Section */}
    <div className="ms-profile-header">
      <div className="ms-avatar">
        {userData?.f_name?.charAt(0) || "U"}
      </div>

      <div className="ms-user-info">
        <h4>
          {`${userData?.f_name || ""} ${userData?.l_name || ""}`.trim() || "User"}
        </h4>
        <p>{userData?.email || "user@company.com"}</p>
      </div>
    </div>

    {/* Divider */}
    <div className="ms-divider"></div>

    {/* 🔥 Menu Items */}
    <div className="ms-menu">
      <a href="https://myprofile.microsoft.com/" target="_blank" rel="noreferrer">
        My Profile
        <i className="fas fa-arrow-up-right-from-square external-link-icon"></i>
      </a>
                
      <Link to="/profile">My Assets</Link>

    </div>

    {/* Divider */}
    <div className="ms-divider"></div>

    {/* Logout */}
    <button className="ms-logout" onClick={handleLogout}>
      Logout
    </button>

  </div>
</div>
            </>
          )}
        </nav>

        {/* LOGIN BUTTON */}
        {!isLoading && !isLoggedIn && (
          <Link to={authURL} className="login-btn">
            Login / Register
          </Link>
        )}

      </div>
    </header>
  );
}

export default Header;
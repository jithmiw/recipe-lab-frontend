import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top"
      style={{ background: "#FDF5F2" }}
    >
      <div className="container-fluid fw-semibold">
        <Link
          to="/"
          className="fw-bold navbar-brand"
          style={{ color: "#E1611F" }}
        >
          <img
            src="/images/recipe.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Recipe Lab
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/#about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/generate-recipe/#features" className="nav-link">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/generate-recipe"
                className="btn btn-outline-dark fw-semibold"
                aria-current="page"
              >
                Discover
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

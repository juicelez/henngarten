"use client"; // Mark as client component

import { useEffect } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Load Bootstrap JS

export default function Header() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary fw-bold">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Logo
        </a>
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
          <ul className="navbar-nav text-white">
            <li className="nav-item">
              <a className="nav-link" href="mailto:contact@joerghenn.com">
                Kontakt
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gartenpflege
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gartenbau
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pflanzenverkauf
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

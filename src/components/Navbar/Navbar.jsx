import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    window.onscroll = () => {
      if (window.scrollY > 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <nav
      className={`navbar navbar-expand-lg text-uppercase py-4 fixed-top  ${
        scroll ? "scrolled" : ""
      }`}
    >
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          <h2>start Framework</h2>
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
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink
                className="nav-link text-white"
                aria-current="page"
                to="about"
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="portfolio">
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-white" to="contact">
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

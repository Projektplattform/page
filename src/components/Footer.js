import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

// change id n shit, make it black mb

function Footer() {
  return (
    <div id="subscribe">
      <h3>Stay in touch </h3>
      <div class="footer-social">
        <a href="www.ppe.tum.de">
          <p>Behance</p>
        </a>

        <a href="https://www.linkedin.com/company/14825808">
          <p>LinkedIn</p>
        </a>
        <a href="https://github.com/Projektplattform">
          <p>Github</p>
        </a>
      </div>
      <div class="footer">
        <Link to="/" smooth={true}>
          <p>Home</p>
        </Link>

        <ScrollLink to="services" smooth={true}>
          <p>Projects</p>
        </ScrollLink>

        <ScrollLink to="features" smooth={true}>
          <p>About</p>
        </ScrollLink>
      </div>
      <p>
        Jakob Fellner, 2021 | Made using React{" "}
        <span role="img" aria-label="atom">
          ⚛️
        </span>
      </p>
      <br />
      <ScrollLink to="topofpage" smooth={true} className="to-top-btn">
        <p>Back to top</p>
      </ScrollLink>
    </div>
  );
}

export default Footer;

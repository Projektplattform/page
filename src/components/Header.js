import React from "react";
import { motion } from "framer-motion";

import WaveLine from "./WaveLine";
import me from "../images/PPE.jpg";

// replace the thil vid with something employable, also add some "scroll down" thing below the button components. Mouse wheel for pc, mobile scroll for phones idk

function Header() {
  return (
    <motion.div
      animate={{
        opacity: 1
      }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      initial={{ opacity: 0 }}
      id="topofpage"
      className="main"
    >
    
      <div className="name">
        <motion.h1
          id="hello"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 0.5, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          <p>PPE+I <span>Analytics</span>
          <br></br>
          Data is beautiful!
          </p>
        </motion.h1>

        <motion.p
          className="details"
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: 50 }}
        >
          Der Technischen Universität München in Kooperation mit dem Bayerischen Bauindustrieverband e. V.
        </motion.p>
        <motion.div
          className="header-btns"
          animate={{
            opacity: 1
          }}
          transition={{ ease: "easeInOut", delay: 1.5, duration: 0.5 }}
          initial={{ opacity: 0 }}
        >
          <a
            href="https://drive.google.com/file/d/1y36N0bhxYZi4PviF8IaO1ATcvIcGBPBI/view"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            View CV
          </a>
          <a
            href="mailto:info@ppe.tum.de"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn1"
          >
            Contact
          </a>
        </motion.div>
        <motion.img
          src={me}
          width="600px"
          height="100px"
          animate={{
            opacity: 1,
            y: -100,
            x: 650
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: -200, x: 650 }}
          className="video"
          loop
        />
      </div>
    </motion.div>
  );
}

export default Header;

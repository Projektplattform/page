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
            href="https://www.ed.tum.de/ppe/home/"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            PPE+I &nbsp; <sub><small>[TUM]</small></sub>
          </a>
          <a
            href="https://www.bauindustrie-bayern.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn1"
          >
            BBIV
          </a>
        </motion.div>

        <motion.div
          className="header-text"
          animate={{
            opacity: 1,
            y: -200,
            x: 650,
          }}
          style={{
            fontStyle: "italic",
          }}
          transition={{ ease: "easeInOut", delay: 1, duration: 0.5 }}
          initial={{ opacity: 0, y: -200, x: 1350 }}
          loop
        >
          <p>
          <br/> PROJEKTPLATTFORM
          <br/>E N E R G I E +
          <br/>I&nbsp;&nbsp;N&nbsp;&nbsp;N&nbsp;&nbsp;O&nbsp;&nbsp;V&nbsp;&nbsp;A&nbsp;&nbsp;T&nbsp;&nbsp;I&nbsp;&nbsp;O&nbsp;&nbsp;N
          </p>
        </motion.div>

      </div>
      
    </motion.div>
  );
}

export default Header;

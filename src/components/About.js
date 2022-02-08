import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import featureimage from "../images/Bild1.jpg";
import featureimage2 from "../images/Bild2.jpg";

//replace featureimage and .png, img src, ids

function About() {
  const { ref, inView } = useInView({
    threshold: 0.45
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
    
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    if (!inView) {
      animation.start({
        y: -100,
        opacity: 0,
        
        transition: { duration: 0.5, ease: "easeInOut" }
      });
    }
    console.log("Use effect hook, in View", inView);
  }, [inView]);

  return (
    <motion.div ref={ref} animate={animation} id="features">
      <div className="features-model">
      <p
     
      style={{
        textAlign: 'center',
                
      }}
      >
        <img className="about-image" src={featureimage} alt="about" textAlign='center' />
        &ensp;&ensp;&ensp;&ensp;
        <img className="about-image" src={featureimage2} alt="about"  />
        <h4 className="about-text" >PROJEKTPLATTFORM ENERGIE + INNOVATION</h4>
        <h5 className="about-text">Der Technische Universität München
        in Kooperation mit dem Bayerischen Bauindustrieverband e.V.</h5>
        <h5 className="about-text">Arcisstr. 21 - 80333 München - Germany
        </h5>

        
      </p>
      
      </div>
      <div className="features-text">
        <h2>Über uns</h2>
        <h3></h3>
        <p>
           Angesiedelt ist die Projektplattform Energie + Innovation
           am Zentrum für Nachhaltiges Bauen der TU München.
          <br />
        
          Die Projektplattform Energie + Innovation verbindet das praxisorientierte Erfahrungswissen und die Bedürfnisse der Bauindustrie mit innovativen Lösungen der wissenschaftlichen Forschungsarbeit. Sie steht exklusiv für die Mitglieder des Bayerischen Bauindustrieverbandes e.V. offen und bietet in ihrer Form ein bisher einzigartiges Wissens-, Beratungs- und Vermittlungsangebot.

        </p>

        <div className="b-container">
          <a
            href="mailto:info@ppe.tum.de"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-btn"
          >
            Contact
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default About;

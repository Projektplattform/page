import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// add services/workflow and add subpages with case studies. Mb make better button components idk

import Card from "./Card";

import image1 from "../images/TL.webp";
import image2 from "../images/M.webp";
import image3 from "../images/PM.webp";
import image4 from "../images/drawing1.webp";
import image5 from "../images/latin1.webp";

function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1
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
    <div id="services">
      <div className="s-heading">
        <h1>INTERAKTIVE CHARTS</h1>
        <p></p>
      </div>
      <motion.div ref={ref} animate={animation} className="b-container">
        <Card
          label="View"
          title="Taplingua"
          image={image1}
          discipline="UX/UI and Product Design"
          tldr="UI/UX designs for a gamified language learning Android/iOS app done during my internship."
          path="/Taplingua"
          link="<Taplingua/>"
        />
        <Card
          label="View"
          title="Drawing webapp"
          image={image4}
          discipline="UX/UI and Product Design"
          tldr="A drawing webapp running on WebGL made using C# and Unity.
          "
          path="/DrawingWebapp"
          link="<DrawingWebapp/>"
        />
        <Card
          label="View"
          title="Latinify Chrome extension"
          image={image5}
          discipline="UX/UI and Product Design"
          tldr="A Chrome extension written in Javascript that converts Cyrillic to Latin script.
          "
          path="/Latinify"
          link="<Latinify/>"
        />

        <Card
          title="Polar Migration"
          image={image3}
          discipline="UX/UI and Product Design"
          tldr="Campaign that bridges fun and online activism. Made for a design brief set by Rare & Xbox Game Studios"
          path="/Polarmigration"
          link="<Polarmigration/>"
        />
        <Card
          title="Monumental"
          image={image2}
          discipline="UX/UI and Product Design"
          tldr="Designs for ???Monumental???, a location-based Augmented Reality (AR) Android game
          "
          path="/Monumental"
          link="<Monumental/>"
        />
      </motion.div>
    </div>
  );
}

export default Services;

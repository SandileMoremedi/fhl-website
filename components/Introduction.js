import { useAnimation, motion } from "framer-motion";
import {
  FaDonate,
  FaHandHoldingHeart,
  FaBrain,
  FaTools,
  FaChild,
  FaHeart,
  FaBible,
} from "react-icons/fa";

import { useInView } from "react-intersection-observer";

function Introduction() {
  const {
    ref: introduction,
    inView: introductionVisible,
    entries,
  } = useInView();
  const animation = useAnimation();

  if (introductionVisible) {
    animation.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    });
  }
  if (!introductionVisible) {
    animation.start({
      opacity: 0,
      y: 30,
      x: 30,
    });
  }

  return (
    <motion.div
      ref={introduction}
      animate={animation}
      className="introduction-header"
    >
      <h2>What Do We Do?</h2>
      <div className="introduction">
        <section className="intro-col">
          <FaBrain />
          <h3>Youth Empowerment & Educational</h3>
        </section>
        <section className="intro-col">
          <FaChild />
          <h3>HIV & AIDS / Drug Abuse / Sex Abuse / Teenage Pregnancy</h3>
        </section>
        <section className="intro-col">
          <FaHeart />
          <h3>Spiritual Development</h3>
        </section>
        <section className="intro-col">
          <FaTools />
          <h3>Skills Development & Sustainability Training</h3>
        </section>
        <section className="intro-col">
          <FaBible />
          <h3>Promoting Ubuntu & Christian Values</h3>
        </section>
        <section className="intro-col">
          <FaHandHoldingHeart />
          <h3>Health and Wellness Education</h3>
        </section>
      </div>
    </motion.div>
  );
}

export default Introduction;

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function SecondIntro() {
  const animation = useAnimation();
  const { ref: secondIntro, inView, entries } = useInView();

  if (inView) {
    animation.start({
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    });
  }
  if (!inView) {
    animation.start({
      x: -50,
      y: -20,
      opacity: 0,
    });
  }

  return (
    <div className="container">
      <motion.div
        ref={secondIntro}
        animate={animation}
        className="second-intro"
      >
        <h2>What Do We Do?</h2>
        <div className="left"></div>
        <div className="right"></div>
      </motion.div>
    </div>
  );
}

export default SecondIntro;

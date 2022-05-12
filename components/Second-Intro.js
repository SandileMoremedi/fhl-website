import { useAnimation, motion } from "framer-motion";
import Image from "next/image";
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
        <h2>What Have We Done?</h2>
        <article>
          <div className="info">
            <h2>Back To School</h2>
            <p>
              A child holds a better future, this programme has been a great
              success and is mainly our focus currently. Providing school shoes
              to the most vulnerable schools and communities.
            </p>
          </div>
          <div className="image">
            <Image
              src="/backtoschool.jpg"
              layout="fill"
              alt="Back To School Image"
              objectFit="cover"
            />
          </div>
        </article>
        <article>
          <div className="info">
            <h2>The Homeless</h2>
            <p>
              As an organization we have partnered with a big rehabilitation
              center (KwaSizabantu), where all these young people go to after
              making a decision of transforming there lives from drug use and
              other substances.
            </p>
          </div>
          <div className="image">
            <Image
              src="/taxi-car.jpg"
              layout="fill"
              alt="Owner of grocery receiving near a taxi"
              objectFit="cover"
            />
          </div>
        </article>
        <article>
          <div className="info">
            <h2>Osindisweni Hospital</h2>
            <p>
              Faith, Hope and Love was fortunate enough to be able to donate 30
              teddy bears as well as new clothes to the children that stay over
              in the hospital during the holidays.
            </p>
          </div>
          <div className="image">
            <Image
              src="/hospital.jpg"
              layout="fill"
              alt="Image at the hospital"
              objectFit="cover"
            />
          </div>
        </article>
        <article>
          <div className="info">
            <h2>ST Vincent Children&apos;s Home</h2>
            <p>
              The purpose of this programme was to promote forgiveness of past
              and focus on the good things to come. As human beings we always
              dwell on what has happened now what is going to happen and that is
              why we ended up not fulfilling our purpose in life.
            </p>
          </div>
          <div className="image">
            <Image
              src="/home-2.jpg"
              layout="fill"
              alt="Owner of grocery receiving near a taxi"
              objectFit="cover"
            />
          </div>
        </article>
      </motion.div>
    </div>
  );
}

export default SecondIntro;

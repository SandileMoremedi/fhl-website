import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {
  const animation = useAnimation();
  const { ref: about, inView, entries } = useInView();

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
    <>
      <motion.section animate={animation} ref={about} className="container ">
        <article className="about">
          <h2>About Us</h2>

          <p>
            In 2012, Thembisa Shinga registered a non-government organization
            called Faith, Hope and Love (NPO. no 117-742). The motivation behind
            this organization was merely to bring back love and hope to those
            that have experienced similar life challenges as Thembi
            Shingi&apos;s.
          </p>
          <p>
            With FHL Organization we have the countless programmes that are
            active and progressing well. As FHL we have also adopted the
            dysfunctional community of eNiwe School (Empangeni) where we have
            donated about 342 school shoes, school bags, and jerseys to all
            learners with assistance of companies such as FOSKOR and RBCT,
            Vodacom, NYDA, Nandos, Boxer and Imana.
          </p>
          <p>
            We have reached out to a various schools and communities to
            hopefully make a differences in people&apos;s lives. We have worked
            with all High Schools in Clermont (Pinetown), radio stations doing
            motivational talks (Ukhozi FM, Mbokodo FM, and Izwi Lomzanzi FM).
          </p>
          <p>
            Also we are working with NYDA to provide sanitary pods to those
            schools where it&apos;s hard for young ladies or young women to get
            pads especially youth in disadvantaged communities and disadvantaged
            schools.
          </p>
          <p>
            We have also targeted child headed families, providing them with
            monthly food parcels, with the help of Boxer Super Store. Currently
            we are busy training school dropouts as well as older people to be
            able to empower themselves.
          </p>
          <p>
            I believe that it will take one young person to uplift our youth in
            the country. It doesn&apos;t matter which background you came from,
            but you are on this planet means you are born for something great.
            Being a vulnerable and neglected child, I never limit myself by
            dwelling on the past.
          </p>
        </article>
      </motion.section>
    </>
  );
}

export default About;

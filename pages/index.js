import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SecondIntro from "../components/Second-Intro";
import Introduction from "../components/Introduction";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import About from "../components/About";

export default function Home({ variants }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  const items = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: [0.6, 0.01, -0.05, 1],
    },
  };
  return (
    <>
      <Head>
        <title>Faith Hope Love</title>
      </Head>
      <div className="container">
        <div className="content">
          <header role="banner">
            <Navbar />
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="intro"
            >
              <motion.div className="intro-content" variants={variants}>
                <motion.h1 variants={items} className="intro-header">
                  Faith&nbsp;Hope&nbsp;Love
                </motion.h1>
                <motion.p variants={items} className="paragraph">
                  As an organization, we believe in social illness-free society
                  and nation by providing youth empowerment and educational
                  programs, such as Health and Wellness Education, Skills
                  Development and Sustainability, HIV and AIDS / Drug Abuse /
                  Sex Abuse / Teenage Pregnancy.
                </motion.p>
                <motion.div variants={items} className="link">
                  <Link href="#about">Read More</Link>
                </motion.div>
              </motion.div>
              <motion.div variants={items} className="intro-image">
                <Image
                  src="/grocery-1.jpg"
                  width="400"
                  height="400"
                  alt="Bag Of Grocery Image"
                  objectFit="cover"
                />
              </motion.div>
            </motion.div>
          </header>
          <main role="main">
            <Introduction />
            <About />
          </main>
        </div>
      </div>
    </>
  );
}

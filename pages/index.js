import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SecondIntro from "../components/Second-Intro";
import Introduction from "../components/Introduction";
import { motion } from "framer-motion";

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
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="intro"
            >
              <motion.div className="intro-content" variants={variants}>
                <motion.h1 variants={items} className="intro-header">
                  Faith Hope Love
                </motion.h1>
                <motion.p variants={items} className="paragraph">
                  As an organization, we believe in social illness-free society
                  and nation by providing youth empowerment and educational
                  programs, such as Health and Wellness Education, Skills
                  Development and Sustainability, HIV and AIDS / Drug Abuse /
                  Sex Abuse / Teenage Pregnancy.
                </motion.p>
                <motion.div key="first-item" variants={items} className="link">
                  <Link href="/about">Read More</Link>
                </motion.div>
              </motion.div>
              <motion.div variants={items} className="intro-images">
                <div className="image-top">
                  <Image
                    src="/logo.jpg"
                    layout="fill"
                    alt="Bag Of Grocery Image"
                    objectFit="contain"
                  />
                </div>
              </motion.div>
            </motion.div>
          </header>
          <main role="main">
            <Introduction />
            <SecondIntro />
          </main>
        </div>
      </div>
    </>
  );
}

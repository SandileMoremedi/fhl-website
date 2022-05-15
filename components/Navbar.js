import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
function Navbar() {
  const [nav, setNav] = useState(false);
  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ y: 0, opacity: 1 }}
      role="navigation"
      aria-label="Menu"
    >
      <div className="nav">
        <h1>FHL</h1>
        <div
          className={nav ? "navbar open" : "navbar closed "}
          onClick={() => {
            setNav(!nav);
          }}
          role="menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={nav ? "ul open" : "ul closed "}>
          <li
            onClick={() => {
              setNav(!nav);
            }}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            onClick={() => {
              setNav(!nav);
            }}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            onClick={() => {
              setNav(!nav);
            }}
          >
            <Link href="/gallery">Gallery</Link>
          </li>
          <li
            onClick={() => {
              setNav(!nav);
            }}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;

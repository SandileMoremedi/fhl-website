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
          <li>
            <Link
              href="/"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => {
                setNav(!nav);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Support
            </Link>
          </li>
          <li>
            <Link
              href="/"
              onClick={() => {
                setNav(!nav);
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;

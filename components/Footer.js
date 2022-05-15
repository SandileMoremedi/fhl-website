import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <h2>FHL</h2>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

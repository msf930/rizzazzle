import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <div className={styles.navCont}>
      <div className={styles.navLogo}>
        <Link href="/">
        <Image src="/RRLogo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className={styles.navLinks}>
       
        <Link href="/services">Services</Link>
        <Link href="/about">About Us</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/security">Security</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.navContact}>
        <h3>Every Day 9 AM - 9 PM</h3>
        <a href="tel:17192870745">719-287-0745</a>
      </div>
    </div>
  );
}

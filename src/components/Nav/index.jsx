"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname  } from "next/navigation";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      <div className={styles.navMobile}>
        <div className={styles.navMobileLogo}>
          <Link href="/" onClick={closeMobileMenu}>
            <Image src="/RRLogo.png" alt="logo" width={80} height={80} />
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerActive : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${styles.mobileMenuOverlay} ${isMobileMenuOpen ? styles.mobileMenuOverlayActive : ''}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuActive : ''}`}>
        <div className={styles.mobileMenuHeader}>
          <div className={styles.mobileMenuLogo}>
            <Link href="/" onClick={closeMobileMenu}>
              <Image src="/RRLogo.png" alt="logo" width={80} height={80} />
            </Link>
          </div>
          <button 
            className={styles.mobileMenuClose}
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            ×
          </button>
        </div>
        
        <nav className={styles.mobileMenuNav}>
          <Link href="/services" onClick={closeMobileMenu} className={pathname === "/services" ? styles.mobileMenuNavActive : ""}>Services</Link>
          <Link href="/about" onClick={closeMobileMenu} className={pathname === "/about" ? styles.mobileMenuNavActive : ""}>About Us</Link>
          <Link href="/projects" onClick={closeMobileMenu} className={pathname === "/projects" ? styles.mobileMenuNavActive : ""}>Projects</Link>
          <Link href="/security" onClick={closeMobileMenu} className={pathname === "/security" ? styles.mobileMenuNavActive : ""}>Security</Link>
          <Link href="/locations" onClick={closeMobileMenu} className={pathname === "/locations" ? styles.mobileMenuNavActive : ""}>Locations</Link>
          <Link href="/contact" onClick={closeMobileMenu} className={pathname === "/contact" ? styles.mobileMenuNavActive : ""}>Contact</Link>
        </nav>
        
        <div className={styles.mobileMenuContact}>
          <h3>Every Day 9 AM - 9 PM</h3>
          <a href="tel:17192870745" onClick={closeMobileMenu}>719-287-0745</a>
        </div>
      </div>
    </div>
  );
}

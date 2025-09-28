import styles from "./styles.module.css";
import Image from "next/image";
import { FaYelp, FaGoogle, FaLinkedin } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
export default function Footer() {
    return (
        <div className={styles.footerCont}>
            <div className={styles.footerLogo}>
                <Image src="/RRLogo.png" alt="logo" width={100} height={100} />
            </div>
            <div className={styles.footerTextLeft}>

                <p>Every Day 9 AM - 9 PM</p>
                <a href="tel:17192870745" aria-label="Phone">719-287-0745</a>
                <a href="mailto:Alex@RizzazzleRepairs.com" aria-label="Email">Alex@RizzazzleRepairs.com</a>
                <div>
                    <a href="https://maps.app.goo.gl/NC58yZh6EN86JqSt8" target="_blank" aria-label="Address">18555 E Smoky Hill Rd, PO# 462016<br />
                        Aurora, CO 80015, USA</a>
                </div>


            </div>
            <div className={styles.footerTextCenter}>


                <a href="/" aria-label="Home">Home</a>
                <a href="/services" aria-label="Services">Services</a>
                <a href="/about" aria-label="About Us">About Us</a>
                <a href="/projects" aria-label="Projects">Projects</a>


                <a href="/security" aria-label="Security">Security</a>
                <a href="/locations" aria-label="Locations">Locations</a>
                <a href="/contact" aria-label="Contact Us">Contact Us</a>

            </div>

            <div className={styles.footerTextRight}>

                <div className={styles.footerTextRightIcons}>
                    <a href="https://www.yelp.com/biz/rizzazzle-repairs-centennial-2" target="_blank" aria-label="Yelp"><FaYelp /></a>
                    <a href="https://api.us.nextdoor.com/pages/rizzazzle-repairs-llc-centennial-co/" target="_blank" aria-label="Nextdoor"><FaHouseChimney /></a>
                    <a href="https://www.linkedin.com/company/rizzazzle-repairs/" target="_blank" aria-label="LinkedIn"><FaLinkedin /></a>
                    <a href="https://www.google.com/maps/place/Rizzazzle+Repairs+LLC/@39.7053322,-105.1425493,10z/data=!4m6!3m5!1s0x6b73d15d14438a97:0x1d687b57ff1d2fc2!8m2!3d39.3421176!4d-104.8273155!16s%2Fg%2F11pf7x2fl3?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" aria-label="Google"><FaGoogle /></a>
                </div>

                <p>&copy; {new Date().getFullYear()} Rizzazzle Repairs. <br /> All rights reserved.</p>
            </div>

        </div>
    )
}


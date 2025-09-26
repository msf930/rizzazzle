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
                <a href="tel:17192870745">719-287-0745</a>
                <a href="mailto:Alex@RizzazzleRepairs.com">Alex@RizzazzleRepairs.com</a>
                <div>
                    <a href="https://maps.app.goo.gl/NC58yZh6EN86JqSt8" target="_blank">18555 E Smoky Hill Rd, PO# 462016<br />
                        Aurora, CO 80015, USA</a>
                </div>


            </div>
            <div className={styles.footerTextCenter}>


                <a href="/">Home</a>
                <a href="/services">Services</a>
                <a href="/about">About Us</a>
                <a href="/projects">Projects</a>


                <a href="/security">Security</a>
                <a href="/locations">Locations</a>
                <a href="/contact">Contact Us</a>

            </div>

            <div className={styles.footerTextRight}>

                <div className={styles.footerTextRightIcons}>
                    <a href="https://www.yelp.com/biz/rizzazzle-repairs-centennial-2"><FaYelp /></a>
                    <a href="https://api.us.nextdoor.com/pages/rizzazzle-repairs-llc-centennial-co/"><FaHouseChimney /></a>
                    <a href="https://www.linkedin.com/company/rizzazzle-repairs/"><FaLinkedin /></a>
                    <a href="https://www.google.com/maps/place/Rizzazzle+Repairs+LLC/@39.7053322,-105.1425493,10z/data=!4m6!3m5!1s0x6b73d15d14438a97:0x1d687b57ff1d2fc2!8m2!3d39.3421176!4d-104.8273155!16s%2Fg%2F11pf7x2fl3?entry=ttu&g_ep=EgoyMDI1MDkyMy4wIKXMDSoASAFQAw%3D%3D"><FaGoogle /></a>
                </div>

                <p>&copy; {new Date().getFullYear()} Rizzazzle Repairs. <br /> All rights reserved.</p>
            </div>

        </div>
    )
}


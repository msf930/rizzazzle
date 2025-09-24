import styles from "./styles.module.css";
import Image from "next/image";
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


                <a href="https://www.yelp.com/biz/rizzazzle-repairs-centennial-2">Yelp</a>

                <p>&copy; {new Date().getFullYear()} Rizzazzle Repairs. <br /> All rights reserved.</p>
            </div>

        </div>
    )
}


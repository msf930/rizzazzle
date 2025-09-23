import styles from "./styles.module.css";
import Image from "next/image";
export default function Footer() {
    return (
        <div className={styles.footerCont}>
            <div className={styles.footerLogo}>
                <Image src="/RRLogo.png" alt="logo" width={100} height={100} />
            </div>
            <div className={styles.footerText}>
                <div className={styles.footerTextItem}>
                    <p>Every Day 9 AM - 9 PM</p>
                    <a href="tel:17192870745">719-287-0745</a>
                    <a href="mailto:Alex@RizzazzleRepairs.com">Alex@RizzazzleRepairs.com</a>
                    <div>
                        <p>18555 E Smoky Hill Rd, PO# 462016</p>
                        <p>Aurora, CO 80015, USA</p>
                    </div>
                </div>
                <div className={styles.footerTextItem}>
                    
                    <a href="https://www.yelp.com/biz/rizzazzle-repairs-centennial-2">Yelp</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Rizzazzle Repairs. All rights reserved.</p>
            </div>
        </div>
    )
}


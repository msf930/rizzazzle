import styles from "./styles.module.css";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContactSectionSecurity from "@/components/ContactSectionSecurity";
import Footer from "@/components/Footer";
export default function Security() {
    return (
        <div className={styles.securityCont}>
            <Nav />
            <PageHero page="security" />
            <div className={styles.securityItem}>
                <div className={styles.securityItemContLeft}>
                    <div className={styles.securityItemTitle}>
                        <h3>Security Devices</h3>
                        
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.securityItemText}>
                    <p>Offering a wide range of reliable security systems tailored to meet your safety needs.</p>
                </div>
            </div>
            <div className={styles.securityItemContent}>
                <p>Wired Surveillance Cameras</p>
                <hr />
                <p>Wireless Surveillance Cameras</p>
                <hr />
                <p>Doorbell Cameras</p>
                <hr />
                <p>Monitoring Devices</p>
            </div>
            <div className={styles.securityItem}>
                <div className={styles.securityItemContLeft}>
                    <div className={styles.securityItemTitle}>
                        <h3>Security System Service Cycle</h3>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.securityItemText}>
                    <p>From beginning to end, we offer full cycle service to keep you and your property secure.</p>
                </div>
            </div>
            <div className={styles.securityItemContent}>
                <p>1. Product Selection</p>
                <hr />
                <p>2. Complete Installation</p>
                <hr />
                <p>3. Ongoing Support</p>
            </div>
            <div className={styles.securityItem}>
                <div className={styles.securityItemContLeft}>
                    <div className={styles.securityItemTitle}>
                        <h3>Security System Features</h3>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.securityItemText}>
                    <p>Keep what matters most safe and rest easy knowing your home is secure.</p>
                </div>
            </div>
            <div className={styles.securityItemContent}>
                <p>Remote Monitoring</p>
                <hr />
                <p>24/7 Continuous Recording</p>
                <hr />
                <p>Active Deterrence Features</p>
            </div>
            <ContactSectionSecurity />
            <Footer />
        </div>
    )
}
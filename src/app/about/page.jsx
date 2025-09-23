import styles from "./styles.module.css";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContactSection from "@/components/ContactSection/index";
import Footer from "@/components/Footer";
import Link from "next/link";
import LocationSection from "@/components/LocationSection/index";
export default function About() {
    return (
        <div className={styles.aboutCont}>
            <Nav />
            <PageHero page="about" />
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemContLeft}>
                    <div className={styles.aboutItemTitle}>
                        <h3>Why Rizzazzle Repairs?</h3>

                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.aboutItemText}>
                    <p>When it comes to AV installation services, Rizzazzle Repairs is your reliable partner. Our team is committed to delivering top-notch solutions, ensuring your AV needs are met with precision and expertise. We take pride in our work and strive to exceed your expectations.</p>
                </div>
            </div>
            <div className={styles.aboutValueItemCont}>
                <div className={styles.aboutValueItem}>
                    <div className={styles.aboutValueItemImage}>
                        <Image src="/wreath.png" alt="wreath" width={150} height={150} />
                    </div>
                    <div className={styles.aboutValueItemText}>
                        <h3>CERTIFIED <br /> INSTALLERS</h3>
                    </div>
                </div>
                <div className={styles.aboutValueItem}>
                    <div className={styles.aboutValueItemImage}>
                        <Image src="/wreath.png" alt="wreath" width={150} height={150} />
                    </div>
                    <div className={styles.aboutValueItemText}>
                        <h3>EXPERTISE IN <br /> AV OPTIMIZATION</h3>
                    </div>
                </div>
                <div className={styles.aboutValueItem}>
                    <div className={styles.aboutValueItemImage}>
                        <Image src="/wreath.png" alt="wreath" width={150} height={150} />
                    </div>
                    <div className={styles.aboutValueItemText}>
                        <h3>PROFESSIONAL REPAIR <br /> SERVICES</h3>
                    </div>
                </div>
                <div className={styles.aboutValueItem}>
                    <div className={styles.aboutValueItemImage}>
                        <Image src="/wreath.png" alt="wreath" width={150} height={150} />
                    </div>
                    <div className={styles.aboutValueItemText}>
                        <h3>TRUSTED SECURITY <br /> SPECIALISTS</h3>
                    </div>
                </div>
            </div>
            <div className={styles.aboutSpacer}></div>
            <LocationSection />
            
            <ContactSection />
            <Footer />
        </div>
    )
}
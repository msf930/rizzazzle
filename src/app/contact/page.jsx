import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import styles from "./styles.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Nav />
            <PageHero page="contact" />
            <div className={styles.contactItem}>
                <div className={styles.contactItemContLeft}>
                    <div className={styles.contactItemTitle}>
                        <h3>Contact Us</h3>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.contactItemText}>
                    <p>As we do not operate a physical storefront, all services are provided directly at your home or business.</p>
                </div>
            </div>
            <div className={styles.contactItemSpacer}></div>
            <div className={styles.contactItem}>
                <div className={styles.contactItemContLeft}>
                    <div className={styles.contactItemTitle}>
                        <h4>PO Box</h4>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.contactItemText}>
                    <p>18555 E Smoky Hill Rd, PO# 462016
                        <br />
                        Aurora, CO 80015, USA</p>
                </div>
            </div>
            <hr className={styles.contactItemHR} />
            <div className={styles.contactItem}>
                <div className={styles.contactItemContLeft}>
                    <div className={styles.contactItemTitle}>
                        <h4>Phone</h4>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.contactItemText}>
                    <a href="tel:17192870745">(719) 287-0745</a>
                </div>
            </div>
            <hr className={styles.contactItemHR} />
            <div className={styles.contactItem}>
                <div className={styles.contactItemContLeft}>
                    <div className={styles.contactItemTitle}>
                        <h4>Email</h4>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.contactItemText}>
                    <a href="mailto:Alex@RizzazzleRepairs.com">Alex@RizzazzleRepairs.com</a>
                </div>
            </div>
            <div className={styles.contactItemSpacer}></div>
            <ContactForm />
            <ContactSection />
            <Footer />
        </div>
    );
}
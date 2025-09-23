import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import styles from "./styles.module.css";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContactSection from "@/components/ContactSection";
import LocationButton from "@/components/LocationButton";



export default function Services() {
    return (
        <div className={styles.servicesCont}>
            <Nav />
            <PageHero page="services" />
            <div className={styles.servicesItemCont} id="digital-signage-and-tv-mounting">
                <div className={styles.servicesItem} >
                    <div className={styles.servicesItemContLeft}>
                        <div className={styles.servicesItemTitle}>
                            <h3>Digital Signage and TV Mounting</h3>
                        </div>
                        <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                    </div>
                    <div className={styles.servicesItemText}>
                        <p>Digital signage and TV mounting provide sleek, professional displays for sharing information, promotions, or entertainment, with securely installed screens tailored to your space.</p>
                    </div>
                </div>

                <div className={styles.servicesItemContent}>
                    <p>Digital signage installation</p>
                    <hr />
                    <p>TV installation</p>
                    <hr />
                    <p>Computer monitor installation</p>
                    <hr />
                    <p>Touch screen kiosk installation</p>
                </div>
            </div>
            <div className={styles.servicesItemCont} id="security-system-installation">
                <div className={styles.servicesItem} >
                    <div className={styles.servicesItemContLeft}>
                        <div className={styles.servicesItemTitle}>
                            <h3>Security System Installation</h3>
                        </div>
                        <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                    </div>
                    <div className={styles.servicesItemText}>
                        <p>We provide professional security system installation services that ensure reliable protection, seamless integration, and peace of mind for your property.</p>
                    </div>
                </div>
                <div className={styles.servicesItemButton}>
                    <LocationButton page="See More Security" url="security" />
                </div>
                <div className={styles.servicesItemContent}>
                    <p>Business and home services</p>
                    <hr />
                    <p>Digital and analog systems</p>
                    <hr />
                    <p>Security system installation</p>
                    <hr />
                    <p>Security placement expertise</p>
                    <hr />
                    <p>Cable installation</p>
                </div>
            </div>
            <div className={styles.servicesItemCont} id="repairs-and-troubleshooting">
                <div className={styles.servicesItem} >
                    <div className={styles.servicesItemContLeft}>
                        <div className={styles.servicesItemTitle}>
                            <h3>Repairs and Troubleshooting</h3>
                        </div>
                        <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                    </div>
                    <div className={styles.servicesItemText}>
                        <p>We offer fast and dependable repairs and troubleshooting services to keep your systems running smoothly with minimal downtime.</p>
                    </div>
                </div>
                <div className={styles.servicesItemContent}>
                    <p>Glitching screens</p>
                    <hr />
                    <p>System connectivity issues</p>
                    <hr />
                    <p>Security system failure</p>


                </div>
            </div>
            <div className={styles.servicesItemCont} id="routine-maintenance">
                <div className={styles.servicesItem} >
                    <div className={styles.servicesItemContLeft}>
                        <div className={styles.servicesItemTitle}>
                            <h3>Routine Maintenance</h3>
                        </div>
                        <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                    </div>
                    <div className={styles.servicesItemText}>
                        <p>We deliver routine maintenance and clean-up services that keep spaces organized, efficient, and looking their best.</p>
                    </div>
                </div>
                <div className={styles.servicesItemContent}>
                    <p>Cleanup of community clubhouse</p>
                    <hr />
                    <p>Office space cleaning</p>
                    <hr />
                    <p>Pool area upkeep</p>


                </div>
            </div>
            <div className={styles.servicesItemCont} id="something-else">
                <div className={styles.servicesItem} >
                    <div className={styles.servicesItemContLeft}>
                        <div className={styles.servicesItemTitle}>
                            <h3>Something Else?</h3>
                        </div>
                        <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                    </div>
                    <div className={styles.servicesItemText}>
                        <p>Looking for a service not listed here? Contact us to discuss your custom needs—we offer flexible solutions and are always open to new projects.</p>
                    </div>
                </div>
            </div>
            <ContactSection />
            <Footer />
        </div>
    )
}
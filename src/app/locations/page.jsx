import styles from "./styles.module.css";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContactSection from "@/components/ContactSection/index";
import Footer from "@/components/Footer";
import Link from "next/link";
import LocationSection from "@/components/LocationSection/index";

export default function Locations() {
    return (
        <div className={styles.locationsCont}>
            <Nav />
            <PageHero page="locations" />
            <div className={styles.locationsItem}>
                <LocationSection />
            </div>
            <div className={styles.homeExpertiseImages}>
                <div className={styles.homeExpertiseImagesGrid}>
                    <div></div>
                    <div className={styles.homeExpertiseImagesGridItem}>
                        <Image src="/locationsImage2.png" alt="homeExpertiseImage" fill objectFit="cover" />
                    </div>
                </div>
                <div className={styles.homeExpertiseImagesCenter}>
                    <Image src="/locationsImage1.png" alt="homeExpertiseImage" fill objectFit="cover" />
                </div>
            </div>
            <div className={styles.homeExpertiseImagesMobile}>
                <div className={styles.homeExpertiseImagesGrid}>
                    
                    <div className={styles.homeExpertiseImagesGridItem}>
                        <Image src="/locationsImage2.png" alt="homeExpertiseImage" fill objectFit="cover" />
                    </div>
                    <div className={styles.homeExpertiseImagesGridItem}>
                        <Image src="/locationsImage1.png" alt="homeExpertiseImage" fill objectFit="cover" />
                    </div>
                </div>
                
            </div>
            <ContactSection />
            <Footer />
        </div>
    )
}
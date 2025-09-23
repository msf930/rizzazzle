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
            <div className="homeExpertiseImages">
                <div className="homeExpertiseImagesGrid">
                    <div></div>
                    <div className="homeExpertiseImagesGridItem">
                        <Image src="/locationsImage2.png" alt="homeExpertiseImage" fill objectFit="cover" />
                    </div>
                </div>
                <div className="homeExpertiseImagesCenter">
                    <Image src="/locationsImage1.png" alt="homeExpertiseImage" fill objectFit="cover" />
                </div>
            </div>
            <ContactSection />
            <Footer />
        </div>
    )
}
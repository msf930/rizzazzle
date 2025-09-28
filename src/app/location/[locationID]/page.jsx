import styles from "./styles.module.css";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Image from "next/image";
import ContactSection from "@/components/ContactSection/index";
import Footer from "@/components/Footer";
import Link from "next/link";
import LocationSection from "@/components/LocationSection/index";
import LocationHero from "@/components/LocationHero/index";
import ContactButton from "@/components/ContactButton";
import ContactSectionLocation from "@/components/ContactSectionLocation";
import TopSolutions from "@/components/TopSolutions";
export default async function LocationPage({ params }) {
    const { locationID } = await params;

    // Capitalize and replace hyphens with spaces
    const formatLocationID = (id) => {
        return id
            .replace(/-/g, ' ') // Replace hyphens with spaces
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const location = formatLocationID(locationID);
    let mapURL = "";
   
    if (location === "Out Of State") {
        mapURL = await `https://maps.googleapis.com/maps/api/staticmap?center=CO,USA&zoom=6&size=600x600&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`;
    } else {
        mapURL = await `https://maps.googleapis.com/maps/api/staticmap?center=${location},CO&zoom=12&size=600x600&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`;
    }
    return (
        <div>
            <Nav />
            <LocationHero location={location} />
            <div className={styles.locationTopSection}>
                <div className={styles.locationTopSectionLeft}>
                    <h2>RIZZAZZLE REPAIRS</h2>
                    <Image src="/RRLogo.png" alt="rizzazzle logo" width={200} height={200} />
                    <p>Providing professional installation services, technical troubleshooting, and general maintenance for {location} </p>
                    <ContactButton />
                </div>
                <div className={styles.locationTopSectionRight}>
                    <div className={styles.mapContainer}>
                        <img
                            src={mapURL}
                            alt="Denver Location Map"
                            className={styles.staticMap}
                        />
                    </div>
                </div>
            </div>
            <TopSolutions />
            {/* Expertise */}
            <div className={styles.homeExpertise}>
                <hr className={styles.homeExpertiseHR} />
                <div className={styles.homeExpertiseGridCont}>
                    <div className={styles.homeExpertiseTop}>
                        <div className={styles.homeExpertiseTopLeftCont}>
                            <div className={styles.homeExpertiseTopLeft}>
                                <h2>Our Expertise</h2>
                                <div className="homeExpertiseTopLeftIcon">
                                  <Image src="/sectionIcon.png" alt="homeExpertise" width={50} height={50} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.homeExpertiseTopRight}>
                            
                            <h3>Delivering exceptional service solutions</h3>
                            <p>Each service solution is custom built and tailored to fit your exact needs. By partnering with the best manufacturers in the business, we provide you with top notch equipment, personalized professional installation, and exceptional ongoing support</p>
                        </div>
                        
                    </div>
                    <div className={styles.homeExpertiseCardsGrid}>
                        <div className={styles.homeExpertiseCard}>
                            <div className={styles.homeExpertiseCardInner}>
                                <h3>Homes</h3>
                                <p>Customized services for residential properties</p>
                            </div>
                        </div>
                        <div className={styles.homeExpertiseCard}>
                            <div className={styles.homeExpertiseCardInner}>
                                <h3>Businesses</h3>
                                <p>Customized solutions for commercial entities</p>
                            </div>
                        </div>
                        <div className={styles.homeExpertiseCard}>
                            <div className={styles.homeExpertiseCardInner}>
                                <h3>Industrial</h3>
                                <p>Specialized services catering to industrial applications</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSectionLocation location={location} />
            <Footer />
        </div>
    )
}
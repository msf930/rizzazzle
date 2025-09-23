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
    console.log(locationID);
    if (location === "Out Of State") {
        mapURL = await `https://maps.googleapis.com/maps/api/staticmap?center=CO,USA&zoom=6&size=800x700&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`;
    } else {
        mapURL = await `https://maps.googleapis.com/maps/api/staticmap?center=${location},CO&zoom=12&size=800x700&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API}`;
    }
    return (
        <div>
            <Nav />
            <LocationHero location={location} />
            <div className={styles.locationTopSection}>
                <div className={styles.locationTopSectionLeft}>
                    <h2>RIZZAZZLE REPAIRS</h2>
                    <Image src="/RRLogo.png" alt="rizzazzle logo" width={200} height={200} />
                    <p>Providing AV Installations, electronic repairs, and general maintenance for {location} </p>
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
            <div className={styles.homeServices}>
                <div className={styles.homeServicesTitle}>
                    <h2>Top Solutions</h2>
                    <p>Repairs, Installs & Maintenance</p>
                </div>
                <div className={styles.homeServicesCardsGrid}>
                    <div className={styles.homeServicesCardTop}>
                        <Link href="/services" className={styles.homeServicesCardCont}>
                            <div className={styles.homeServicesCard}>
                                <div className={styles.homeServicesCardHoverCont}>
                                    <div className={styles.homeServicesCardIconCont}>
                                        <div className={styles.homeServicesCardIcon}></div>
                                        <div className={styles.homeServicesCardIcon2}></div>
                                        <div className={styles.homeServicesCardIcon3}></div>
                                    </div>
                                    <div className={styles.homeServicesCardHoverText}>
                                        <h3>Learn More</h3>
                                    </div>
                                </div>
                                <h3>Digital Signage or TV Mounting</h3>
                                <p>Tailored signage and TV solutions for homes and businesses</p>
                            </div>
                            <div className={styles.homeServicesCardBG}></div>
                        </Link>
                        <Link href="/services" className={styles.homeServicesCardCont}>
                            <div className={styles.homeServicesCard}>
                                <div className={styles.homeServicesCardHoverCont}>
                                    <div className={styles.homeServicesCardIconCont}>
                                        <div className={styles.homeServicesCardIcon}></div>
                                        <div className={styles.homeServicesCardIcon2}></div>
                                        <div className={styles.homeServicesCardIcon3}></div>
                                    </div>
                                    <div className={styles.homeServicesCardHoverText}>
                                        <h3>Learn More</h3>
                                    </div>
                                </div>
                                <h3>Security System Installation</h3>
                                <p>Expert installation of digital and analog surveillance systems for homes and businesses.</p>

                            </div>
                            <div className={styles.homeServicesCardBG}></div>
                        </Link>
                        <Link href="/services" className={styles.homeServicesCardCont}>
                            <div className={styles.homeServicesCard}>
                                <div className={styles.homeServicesCardHoverCont}>
                                    <div className={styles.homeServicesCardIconCont}>
                                        <div className={styles.homeServicesCardIcon}></div>
                                        <div className={styles.homeServicesCardIcon2}></div>
                                        <div className={styles.homeServicesCardIcon3}></div>
                                    </div>
                                    <div className={styles.homeServicesCardHoverText}>
                                        <h3>Learn More</h3>
                                    </div>
                                </div>
                                <h3>Repairs and Troubleshooting</h3>
                                <p>From screen glitches to camera outages, we provide reliable troubleshooting support</p>
                            </div>
                            <div className={styles.homeServicesCardBG}></div>
                        </Link>
                    </div>
                    <div className={styles.homeServicesCardBottom}>
                        <Link href="/services" className={styles.homeServicesCardCont}>
                            <div className={styles.homeServicesCard}>
                                <div className={styles.homeServicesCardHoverCont}>
                                    <div className={styles.homeServicesCardIconCont}>
                                        <div className={styles.homeServicesCardIcon}></div>
                                        <div className={styles.homeServicesCardIcon2}></div>
                                        <div className={styles.homeServicesCardIcon3}></div>
                                    </div>
                                    <div className={styles.homeServicesCardHoverText}>
                                        <h3>Learn More</h3>
                                    </div>
                                </div>
                                <h3>Routine Maintenance</h3>
                                <p>We provide regular maintenance for clubhouses, offices, and pool areas to keep your community in top condition.</p>
                            </div>
                            <div className={styles.homeServicesCardBG}></div>
                        </Link>
                        <Link href="/services" className={styles.homeServicesCardCont}>
                            <div className={styles.homeServicesCard}>
                                <div className={styles.homeServicesCardHoverCont}>
                                    <div className={styles.homeServicesCardIconCont}>
                                        <div className={styles.homeServicesCardIcon}></div>
                                        <div className={styles.homeServicesCardIcon2}></div>
                                        <div className={styles.homeServicesCardIcon3}></div>
                                    </div>
                                    <div className={styles.homeServicesCardHoverText}>
                                        <h3>Learn More</h3>
                                    </div>
                                </div>
                                <h3>Something Else?</h3>
                                <p>Don&apos;t see the service you need? Contact us with your custom request. We&apos;re flexible and experienced with special projects.</p>
                            </div>
                            <div className={styles.homeServicesCardBG}></div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Expertise */}
            <div className={styles.homeExpertise}>
                <hr className={styles.homeExpertiseHR} />
                <div className={styles.homeExpertiseGridCont}>
                    <div className={styles.homeExpertiseTop}>
                        <div className={styles.homeExpertiseTopLeftCont}>
                            <div className={styles.homeExpertiseTopLeft}>
                                <h2>Our Expertise</h2>
                                <Image src="/sectionIcon.png" alt="homeExpertise" width={50} height={50} />
                            </div>
                        </div>
                        <div className={styles.homeExpertiseTopRight}>
                            <h3>Where We Excel</h3>
                            <p>Delivering exceptional service solutions tailored to different sectors</p>
                        </div>
                        <div></div>
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
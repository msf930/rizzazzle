import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import LocationButton from "@/components/LocationButton/index";

export default function LocationSection() {
    return (
        <div className={styles.locationSectionCont}>
            <div className={styles.aboutItem}>
                <div className={styles.aboutItemContLeft}>
                    <div className={styles.aboutItemTitle}>
                        <h3>Our Service Areas</h3>
                        <p>Click below to see our service areas</p>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                <div className={styles.aboutItemText}>
                    <h3>AV Installation and Repair For Denver and Beyond</h3>
                </div>
            </div>
            <div className={styles.aboutLocationCont}>
                <div className={styles.aboutLocationGrid}>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Denver" url="denver" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Boulder" url="boulder" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Estes Park" url="estes-park" />
                        
                    </div>
                </div>
                <hr className={styles.aboutLocationHr} />
                <div className={styles.aboutLocationGrid}>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Aurora" url="aurora" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Golden" url="golden" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Fort Collins" url="fort-collins" />
                        
                    </div>
                </div>
                <hr className={styles.aboutLocationHr} />
                <div className={styles.aboutLocationGrid}>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Arvada" url="arvada" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Broomfield" url="broomfield" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Castle Rock" url="castle-rock" />
                        
                    </div>
                </div>
                <hr className={styles.aboutLocationHr} />
                <div className={styles.aboutLocationGrid}>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Lakewood" url="lakewood" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Littleton" url="littleton" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Colorado Springs" url="colorado-springs" />
                        
                    </div>
                </div>
                <hr className={styles.aboutLocationHr} />
                <div className={styles.aboutLocationGrid}>
                    <div className={styles.aboutLocationItem}>
                            <LocationButton page="Centennial" url="centennial" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Evergreen" url="evergreen" />
                        
                    </div>
                    <div className={styles.aboutLocationItem}>
                        <LocationButton page="Out of state" url="out-of-state" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
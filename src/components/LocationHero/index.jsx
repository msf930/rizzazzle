import styles from "./styles.module.css";
import Image from "next/image";

export default function LocationHero(props) {
    const { location } = props;
    
   
    return (
        <div className={styles.sectionHeroCont}>
            <div className={styles.sectionHeroGrid}>
                <div className={styles.sectionHeroGridLeft}>
                    <div className={styles.sectionHeroGridLeftText}>
                        <h1>{location} Services</h1>
                        <p>{`Professional services for ${location}. Delivering seamless installations, repairs, and reliable support.`}</p>
                    </div>
                </div>
                <div className={styles.sectionHeroGridRight}>
                    <Image src="/locationHero.png" alt={location} fill objectFit="cover" />
                </div>
            </div>
        </div>
    )
}
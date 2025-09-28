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
                    <Image src="/locationHero.png" alt={location} fill={true} style={{objectFit: "cover"}} placeholder="blur" blurDataURL="/homeHeroPixel.png" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw" />
                </div>
            </div>
        </div>
    )
}
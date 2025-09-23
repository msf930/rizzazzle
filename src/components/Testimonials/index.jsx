import styles from "./styles.module.css";
import Image from "next/image";

export default function Testimonials() {
    return (
        <div className={styles.testimonialsCont}>
            <hr className={styles.testimonialsTopHR}/>
            <h2>Client Reviews</h2>
            <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsItemContLeft}>
                    <div className={styles.testimonialsItemTitle}>
                        <h3>Patrice G.</h3>
                        <p>Kisco Senior Living</p>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                    <div className={styles.testimonialsItemText}>
                        <p>“We certainly appreciate all of the extra effort that went into this install! Plus I appreciate your download of where things are and what steps we need to take next.”</p>
                    </div>
            </div>
            <hr/>
            <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsItemContLeft}>
                    <div className={styles.testimonialsItemTitle}>
                        <h3>Roger H.</h3>
                        <p>Greystar</p>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                    <div className={styles.testimonialsItemText}>
                        <p>“Alex and team were phenomenal to work with and very professional! Highly recommend their services!”</p>
                    </div>
            </div>
            <hr/>
            <div className={styles.testimonialsItem}>
                <div className={styles.testimonialsItemContLeft}>
                    <div className={styles.testimonialsItemTitle}>
                        <h3>Ann R.</h3>
                        <p>The Point Group</p>
                    </div>
                    <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                </div>
                    <div className={styles.testimonialsItemText}>
                        <p>“Wouldn&apos;t change anything. Customer service is one of their strongest assets…rated 10 out of 10!! The (technicians) were literally the ONLY WAY that the center opened on time without glitches. I was going to send them a note on how proud they should all feel about The Carnegie.”</p>
                    </div>
            </div>
            
        </div>
    )
}
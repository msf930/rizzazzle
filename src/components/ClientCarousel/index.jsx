import Image from "next/image";
import styles from "./styles.module.css";

export default function ClientCarousel() {
    // Array of all client logos
    const clientLogos1 = [
        'client1.png', 'client2.png', 'client3.png', 'client4.png', 'client5.png',
        'client6.png', 'client7.png', 'client8.png'
    ];

    const clientLogos2 = [
        'client9.png', 'client10.png', 'client11.png', 'client12.png', 'client13.png',
        'client14.png', 'client15.png', 'client16.png', 'client17.png'
    ];

    return (
        <div className={styles.clientCarousel}>
            <div className={styles.clientCarouselInner}>
                <hr/>
                <h2>Valued Clients</h2>
                <div className={styles.carouselContainer}>
                    <div className={styles.carouselTrack}>
                        {/* First set of logos */}
                        {clientLogos1.map((logo, index) => (
                            <div key={`first-${index}`} className={styles.logoItem}>
                                <Image
                                    src={`/clientLogos/${logo}`}
                                    alt={`Client ${index + 1}`}
                                    height={100}
                                    width={200}
                                    style={{objectFit: "cover"}} 
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {clientLogos1.map((logo, index) => (
                            <div key={`second-${index}`} className={styles.logoItem}>
                                <Image
                                    src={`/clientLogos/${logo}`}
                                    alt={`Client ${index + 1}`}
                                    height={100}
                                    width={200}
                                    style={{objectFit: "cover"}} 
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.carouselContainer}>
                    <div className={styles.carouselTrack2}>
                        {/* First set of logos */}
                        {clientLogos2.map((logo, index) => (
                            <div key={`first-${index}`} className={styles.logoItem}>
                                <Image
                                    src={`/clientLogos/${logo}`}
                                    alt={`Client ${index + 1}`}
                                    height={100}
                                    width={200}
                                    style={{objectFit: "cover"}} 
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {clientLogos2.map((logo, index) => (
                            <div key={`second-${index}`} className={styles.logoItem}>
                                <Image
                                    src={`/clientLogos/${logo}`}
                                    alt={`Client ${index + 1}`}
                                    height={100}
                                    width={200}
                                    style={{objectFit: "cover"}} 
                                    className={styles.logoImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
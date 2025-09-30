import Link from "next/link";
import styles from "./styles.module.css";
export default function TopSolutions() {
  return (
    <div className={styles.homeServices}>
    <div className={styles.homeServicesTitle}>
      <h2>Top Solutions</h2>
      <p>Repairs, Installs & Maintenance</p>
    </div>
    <div className={styles.homeServicesCardsGrid}>
      <div className={styles.homeServicesCardTop}>
        <div  className={styles.homeServicesCardCont}>
          <div className={styles.homeServicesCard}>
            <div className={styles.homeServicesCardHoverCont}>
              <div className={styles.homeServicesCardIconCont}>
                <div className={styles.homeServicesCardIcon}></div>
                <div className={styles.homeServicesCardIcon2}></div>
                <div className={styles.homeServicesCardIcon3}></div>
              </div>
              <div className={styles.homeServicesCardHoverText}>
                <Link href="/services#digital-signage-and-tv-mounting" className={styles.homeServicesCardHoverTextLink}>Discover More</Link>
              </div>
            </div>
            <h3>Digital Signage or TV Mounting</h3>
            <p>Tailored signage and TV solutions for homes and businesses</p>
          </div>
          <div className={styles.homeServicesCardBG}></div>
        </div>
        <div className={styles.homeServicesCardCont}>
          <div className={styles.homeServicesCard}>
            <div className={styles.homeServicesCardHoverCont}>
              <div className={styles.homeServicesCardIconCont}>
                <div className={styles.homeServicesCardIcon}></div>
                <div className={styles.homeServicesCardIcon2}></div>
                <div className={styles.homeServicesCardIcon3}></div>
              </div>
              <div className={styles.homeServicesCardHoverText}>
                <Link href="/services#security-system-installation" className={styles.homeServicesCardHoverTextLink}>Explore Services</Link>
              </div>
            </div>
            <h3>Security System Installation</h3>
            <p>Expert installation of digital and analog surveillance systems for homes and businesses</p>

          </div>
          <div className={styles.homeServicesCardBG}></div>
        </div>
        <div className={styles.homeServicesCardCont}>
          <div className={styles.homeServicesCard}>
            <div className={styles.homeServicesCardHoverCont}>
              <div className={styles.homeServicesCardIconCont}>
                <div className={styles.homeServicesCardIcon}></div>
                <div className={styles.homeServicesCardIcon2}></div>
                <div className={styles.homeServicesCardIcon3}></div>
              </div>
              <div className={styles.homeServicesCardHoverText}>
                <Link href="/services#repairs-and-troubleshooting" className={styles.homeServicesCardHoverTextLink}>See How it Works</Link>
              </div>
            </div>
            <h3>Repairs and Troubleshooting</h3>
            <p>From screen glitches to camera outages, we provide reliable troubleshooting support</p>
          </div>
          <div className={styles.homeServicesCardBG}></div>
        </div>
      </div>
      <div className={styles.homeServicesCardBottom}>
        <div className={styles.homeServicesCardCont}>
          <div className={styles.homeServicesCard}>
          <div className={styles.homeServicesCardHoverCont}>
              <div className={styles.homeServicesCardIconCont}>
                <div className={styles.homeServicesCardIcon}></div>
                <div className={styles.homeServicesCardIcon2}></div>
                <div className={styles.homeServicesCardIcon3}></div>
              </div>
              <div className={styles.homeServicesCardHoverText}>
                <Link href="/services#routine-maintenance" className={styles.homeServicesCardHoverTextLink}>Details</Link>
              </div>
            </div>
            <h3>Routine Maintenance</h3>
            <p>We provide regular maintenance for clubhouses, offices, and pool areas to keep your community in top condition</p>
          </div>
          <div className={styles.homeServicesCardBG}></div>
        </div>
        <div className={styles.homeServicesCardCont}>
          <div className={styles.homeServicesCard}>
          <div className={styles.homeServicesCardHoverCont}>
              <div className={styles.homeServicesCardIconCont}>
                <div className={styles.homeServicesCardIcon}></div>
                <div className={styles.homeServicesCardIcon2}></div>
                <div className={styles.homeServicesCardIcon3}></div>
              </div>
              <div className={styles.homeServicesCardHoverText}>
                <Link href="/services#something-else" className={styles.homeServicesCardHoverTextLink}>View Details</Link>
              </div>
            </div>
            <h3>Something Else?</h3>
            <p>Don&apos;t see the service you need? Contact us with your custom request. We&apos;re flexible and experienced with special projects</p>
          </div>
          <div className={styles.homeServicesCardBG}></div>
        </div>
      </div>
    </div>
  </div>
  );
}





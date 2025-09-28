import styles from "./styles.module.css";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";


export default function ContactSection() {
  return (
    <div className={styles.contactSectionCont}>
      <div className={styles.contactSection}>
        <div className={styles.contactSectionLeft}>
          <div className={styles.contactSectionLeftText}>
            <p>9AM - 9PM Every Day</p>
            <h2>Serving Denver & Beyond</h2>
            <ContactButton />
          </div>
        </div>
        <div className={styles.contactSectionRight}>
          <Image src="/CTAMavrick.png" alt="contact section right" fill style={{objectFit: "cover"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" />
        </div>
      </div>

    </div>
  );
}
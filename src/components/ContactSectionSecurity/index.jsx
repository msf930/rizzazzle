import styles from "./styles.module.css";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";


export default function ContactSectionSecurity() {
  return (
    <div className={styles.contactSectionCont}>
      <div className={styles.contactSection}>
        <div className={styles.contactSectionLeft}>
          <div className={styles.contactSectionLeftText}>
            <p>9AM - 9PM Every Day</p>
            <h2>Get peace of mind now</h2>
            <ContactButton />
          </div>
        </div>
        <div className={styles.contactSectionRight}>
          <Image src="/contactSecurity.jpg" alt="contact section right" fill objectFit="cover" />
        </div>
      </div>

    </div>
  );
}
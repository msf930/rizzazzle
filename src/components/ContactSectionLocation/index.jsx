import styles from "./styles.module.css";
import Image from "next/image";
import ContactButton from "@/components/ContactButton";


export default function ContactSectionLocation({location}) {
  let locationText = "";
  if(location === "Out Of State") {
    locationText = "Serving Colorado & Beyond";
  } else {
    locationText = "Serving " + location + " & Beyond";
  }
  return (
    <div className={styles.contactSectionCont}>
      <div className={styles.contactSection}>
        <div className={styles.contactSectionLeft}>
          <div className={styles.contactSectionLeftText}>
            <p>9AM - 9PM Every Day</p>
            <h2>{locationText}</h2>
            <ContactButton />
          </div>
        </div>
        <div className={styles.contactSectionRight}>
          <Image src="/CTAMavrick.png" alt="contact section right" fill={true} style={{objectFit: "cover"}} placeholder="blur" blurDataURL="/homeHeroPixel.png" priority={true}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw" />
        </div>
      </div>

    </div>
  );
}
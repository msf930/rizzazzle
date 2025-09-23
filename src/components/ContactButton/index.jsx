
import styles from "./styles.module.css";
import Link from "next/link";
export default function ContactButton() {
    return (
        <div className={styles.btnCont}>
            <Link href="/contact" className={styles.btnFront}>Contact Us</Link>
            <div className={styles.btnBack}></div>
        </div>
    );
}
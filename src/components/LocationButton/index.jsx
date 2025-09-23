import styles from "./styles.module.css";
import Link from "next/link";
export default function LocationButton({ page, url }) {
    
    return (
        <div className={styles.btnCont}>
            <a href={`location/${url}`} className={styles.btnFront}>{page}</a>
            <div className={styles.btnBack}></div>
        </div>
    );
}
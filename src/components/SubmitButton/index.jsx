
import styles from "./styles.module.css";

export default function SubmitButton() {
    return (
        <div className={styles.btnCont}>
            <div className={styles.btnFront}>Submit</div>
            <div className={styles.btnBack}></div>
        </div>
    );
}
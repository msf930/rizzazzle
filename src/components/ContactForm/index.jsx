"use client";

import styles from "./styles.module.css";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import SubmitButton from "../SubmitButton";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    useEffect(() => {

        //if (token)
            // console.log(`hCaptcha Token: ${token}`);

    }, [token]);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "91c99332-14e8-480a-abd9-c270b0e5cb95");
        // formData.append("access_key", "78b559a9-35cc-4bde-bb30-7fcacfc54cdf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <div className={styles.contactFormCont}>
            <div className={styles.contactFormGrid}>
                <div className={styles.contactFormLeft}>
                    <div className={styles.contactFormLeftTitle}>
                        <h2>Reach Out</h2>
                        <div className={styles.contactFormLeftTitleArrow}>
                            <Image src="/sectionIcon.png" alt="rightArrow" width={50} height={50} />
                        </div>
                    </div>
                </div>
                <div className={styles.contactFormRight}>

                    <form onSubmit={onSubmit} className={styles.contactFormCont}>
                        <div className={styles.contactFormGroup}>
                            <div className={styles.contactFormInputCont}>
                                <label htmlFor="First Name">First Name</label>
                                <input type="text" name="First Name" id="First Name" className={styles.contactFormInputField} />
                            </div>
                            <div className={styles.contactFormInputCont}>
                                <label htmlFor="Last Name">Last Name</label>
                                <input type="text" name="Last Name" id="Last Name" className={styles.contactFormInputField} />
                            </div>
                        </div>
                        <div className={styles.contactFormGroup}>
                            <div className={styles.contactFormInputCont}>
                                <label htmlFor="Email">Email</label>
                                <input type="email" name="Email" id="Email" className={styles.contactFormInputField} />
                            </div>
                        </div>
                        <div className={styles.contactFormGroup}>
                            <div className={styles.contactFormInputCont}>
                                <label htmlFor="Phone">Phone</label>
                                <input type="tel" name="Phone" id="Phone" className={styles.contactFormInputField} />
                            </div>
                        </div>
                        <div className={styles.contactFormGroupArea}>
                            <div className={styles.contactFormInputAreaCont}>
                                <label htmlFor="Message">Message</label>
                                <textarea name="Message" id="Message" className={styles.contactFormInputArea} />
                            </div>
                        </div>
                        <div className={styles.contactFormGroupButton}>
                            <HCaptcha
                                    // sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                                    sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY}
                                    // onLoad={onLoad}
                                    onVerify={setToken}
                                    ref={captchaRef}
                                    reCaptchaCompat={false}
                                    size="normal"
                                    theme="dark"
                                />
                            
                            <button type="submit"><SubmitButton /></button>
                        </div>
                        <div className={styles.contactFormResult}>{result}</div>
                    </form>
                </div>
            </div>
        </div>
    );
}
import React from 'react';
import logo from "@logos/logo_yard_sale.svg";
import email from "@icons/email.svg";
import Image from 'next/image';
import styles from "@styles/emailSent.module.scss";

const EmailSent = () => {
    return (
        <div className={styles["SendEmail"]}>
            <div className={styles["form-container"]}>
                <Image src={logo} alt="logo" className={styles["logo"]} />
                <h1 className={styles["title"]}>Email has been sent!</h1>
                <p className={styles["subtitle"]}>Please check your inbox for instructions on how to reset the password</p>
                <div className={styles["email-image"]}>
                    <Image src={email} alt="email" className={styles["email-image-img"]} />
                </div>
                <button className={`${styles["primary-button"]} ${styles["login-button"]}`}>Login</button>
                <p className={styles["resend"]}>
                    <span className={styles["resend-span"]}>Didn't receive the email?</span>
                    <a href="/" className={styles["resend-a"]}>Resend</a>
                </p>
            </div>
        </div>
    )
}

export default EmailSent
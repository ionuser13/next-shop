import React from 'react';
import logo from '@logos/logo_yard_sale.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/passwordRecovery.module.scss';

const PasswordRecovery = () => {
  return (
    <div className={styles['PasswordRecovery']}>
      <div className={styles['PasswordRecover-container']}>
        <Link href="/main">
          <Image src={logo} alt="logo" className={styles['logo']} />
        </Link>
        <h1 className={styles['title']}>Password recovery</h1>
        <p className={styles['subtitle']}>Inform the email address used to create your account</p>
        <form action="/" className={styles['form']}>
          <label htmlFor="email" className={styles['label']}>
            Email address
          </label>
          <input type="text" id="email" className={`${styles['input']} ${styles['input-email']}`} />
          <input type="submit" value="Confirm" className={`${styles['primary-button']} ${styles['login-button']}`} />
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;

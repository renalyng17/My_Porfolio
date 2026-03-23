import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} Renalyn G. Giray. All rights reserved.
      </p>
      <nav className={styles.links} aria-label="Footer navigation">
        <a href="/terms" className={styles.link}>Terms &amp; Conditions</a>
        <span className={styles.sep} aria-hidden="true">|</span>
        <a href="/privacy" className={styles.link}>Privacy Policy</a>
      </nav>
    </div>
  </footer>
);

export default Footer;

import React from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.profileWrap}>
          <img src="/profile.png" alt="Renalyn G. Giray — Profile" className={styles.profileImg} />
        </div>
        <h1 className={styles.name}>RENALYN GALZOTE GIRAY</h1>
        <p className={styles.subtitle}>Frontend Developer &amp; UI/UX Designer</p>
      </div>

      <button className={styles.scrollDown} onClick={scrollToAbout} aria-label="Scroll down to About section">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll Down</span>
        <ChevronDown size={15} className={styles.scrollIcon} />
      </button>
    </section>
  );
};

export default Hero;

import React from 'react';
import styles from './About.module.css';

const infoItems = [
  { label: 'Name', value: 'Renalyn Galzote Giray' },
  { label: 'Age', value: '23' },
  { label: 'Phone', value: '+63 915 756 2650' },
  { label: 'Address', value: 'Caloocan City, Philippines' },
  { label: 'Gmail', value: 'renagiray17@gmail.com' },
];

const About = () => (
  <section id="about" className={styles.about}>
    <div className={styles.container}>
      <span className={styles.sectionNum} aria-hidden="true">01</span>
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <img src="/profile.jpeg" alt="Renalyn Galzote Giray — About" className={styles.image} />
        </div>

        <div className={styles.content}>
          <p className="section-label">Discover</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-title-underline" />
          <p className={styles.bio}>
            I'm Renalyn Giray, a UI/UX designer and frontend developer who unites creativity with
            code. I create high-performing, responsive web apps with an unwavering emphasis on
            user experience and aesthetics. For me, design is about how things feel and work as
            much as how they seem. I transform difficult issues into smooth, user-friendly digital
            experiences.
          </p>

          <div className={styles.infoBox}>
            <div className={styles.infoGrid}>
              {infoItems.map(({ label, value }) => (
                <div key={label} className={styles.infoItem}>
                  <span className={styles.infoLabel}>{label}:</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              ))}
            </div>
          </div>

              
        </div>
      </div>
    </div>
  </section>
);

export default About;

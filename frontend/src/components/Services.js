import React from 'react';
import { Palette, Code2, Globe } from 'lucide-react';
import styles from './Services.module.css';

const services = [
  {
    Icon: Palette,
    title: 'UI/UX Designer',
    desc: 'User-focused UI/UX Designer dedicated to crafting intuitive, accessible digital experiences that blend visual aesthetics with seamless functionality.',
  },
  {
    Icon: Code2,
    title: 'Frontend Developer',
    desc: 'Frontend Developer specializing in building responsive, high-performance web applications with modern JavaScript frameworks and a keen eye for pixel-perfect implementation.',
  },
  {
    Icon: Globe,
    title: 'Web Design',
    desc: 'Creative Web Designer specializing in crafting visually compelling, user-friendly websites that balance aesthetics with intuitive functionality.',
  },
];

const Services = () => (
  <section id="services" className={styles.services}>
    <div className={styles.container}>
      <span className={styles.sectionNum} aria-hidden="true">02</span>
      <div className={styles.header}>
        <p className="section-label">What I Do</p>
        <h2 className="section-title">My Services</h2>
        <div className="section-title-underline" />
      </div>
      <div className={styles.grid}>
        {services.map(({ Icon, title, desc }) => (
          <div key={title} className={styles.card}>
            <div className={styles.iconWrap}>
              <div className={styles.iconBox} aria-hidden="true">
                <Icon size={24} strokeWidth={1.5} />
              </div>
            </div>
            <h3 className={styles.cardTitle}>{title}</h3>
            <div className={styles.cardUnderline} />
            <p className={styles.cardDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;

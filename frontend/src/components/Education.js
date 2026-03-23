import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import styles from './Education.module.css';

const educationData = [
  {
    Icon: BookOpen,
    school: 'Camarin High School',
    degree: 'High School',
    year: '2015 – 2019',
  },
  {
    Icon: BookOpen,
    school: 'Cleverose College Inc.',
    degree: 'Senior High',
    year: '2019 – 2021',
  },
  {
    Icon: GraduationCap,
    school: 'University of Caloocan City',
    degree: 'Bachelor of Science in Computer Science',
    year: '2022 – 2026',
  },
];

const Education = () => (
  <section id="education" className={styles.education}>
    <div className={styles.container}>
      <span className={styles.sectionNum} aria-hidden="true">03</span>
      <div className={styles.header}>
        <p className="section-label">My Journey</p>
        <h2 className="section-title">Educational Background</h2>
        <div className="section-title-underline" />
      </div>

      <div className={styles.timeline}>
        {educationData.map(({ Icon, school, degree, year }, idx) => (
          <div key={idx} className={styles.item}>
            <div className={styles.dotWrap}>
              <div className={styles.dot}>
                <Icon size={16} aria-hidden="true" />
              </div>
            </div>
            <div className={styles.card}>
              <span className={styles.year}>{year}</span>
              <h3 className={styles.school}>{school}</h3>
              <p className={styles.degree}>{degree}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;

import React from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './Projects.module.css';

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const projects = [
  {
    num: '01',
    title: 'Vehicle Dispatch System',
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js'],
    desc: `The internship aimed to optimize resource allocation in the Department of Agriculture by developing a Vehicle Dispatch System. The sysADD section managed the project, utilizing React.js for client-side rendering, Tailwind CSS for styling, and Node.js/Express.js for the server-side. The resulting program replaces manual procedures with a centralized digital platform, enhancing vehicle scheduling, tracking, and management, showcasing full-stack web development's role in improving public sector efficiency.`,
    github: 'https://github.com/renalyng17/vehicle-dispatch-system',
    live: null,
  },
  {
    num: '02',
    title: 'ACCEL-O-ROT',
    tech: ['IoT', 'Flutter', 'Firebase', 'Sensors'],
    desc: `Traditional composting methods often face issues like slow decomposition and inadequate environmental control. The Accel-O-Rot project addresses these challenges by introducing an integrated smart composting platform, which accelerates organic waste decomposition into compost within 14 days. This system utilizes IoT-enabled sensors for real-time monitoring of critical factors such as air quality, moisture, and temperature, allowing for automated adjustments to maintain optimal conditions. The Accel-O-Rot improves processing efficiency, reduces labor requirements, minimizes odor, and ensures compliance with standards, making it a suitable solution for community-level waste management.`,
    github: null,
    live: 'https://accel-o-rot.web.app/',
  },
];

const Projects = () => (
  <section id="projects" className={styles.projects}>
    <div className={styles.container}>
      <span className={styles.sectionNum} aria-hidden="true">04</span>
      <div className={styles.header}>
        <p className="section-label">My Work</p>
        <h2 className="section-title">My Projects</h2>
        <div className="section-title-underline" />
      </div>

      <div className={styles.list}>
        {projects.map((proj) => (
          <div key={proj.title} className={styles.card}>
            <span className={styles.projNum} aria-hidden="true">{proj.num}</span>
            <div className={styles.cardBody}>
              <h3 className={styles.projTitle}>{proj.title}</h3>
              <div className={styles.tags}>
                {proj.tech.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
              <p className={styles.projDesc}>{proj.desc}</p>
              <div className={styles.links}>
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkBtn}
                    aria-label={`${proj.title} GitHub repository`}
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkBtn} ${styles.liveBtnFilled}`}
                    aria-label={`${proj.title} live demo`}
                  >
                    <ExternalLink size={15} strokeWidth={2} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

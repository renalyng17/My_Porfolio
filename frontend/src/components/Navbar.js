import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
      <div className={styles.inner}>
        <a href="#home" className={styles.logo} onClick={() => handleLinkClick('home')}>
          <span className={styles.logoAccent}>R</span>enalyn
        </a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                className={`${styles.link} ${active === id ? styles.activeLink : ''}`}
                onClick={() => handleLinkClick(id)}
                aria-current={active === id ? 'page' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
          <li>
            <button className={styles.ctaBtn} onClick={() => handleLinkClick('contact')}>
              Contact Me
            </button>
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

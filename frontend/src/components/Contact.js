import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import axios from 'axios';
import styles from './Contact.module.css';

const contactItems = [
  { Icon: Phone, label: 'Phone', value: '+63 915 756 2650', href: 'tel:+639157562650' },
  { Icon: Mail, label: 'Email', value: 'renagiray17@gmail.com', href: 'mailto:renagiray17@gmail.com' },
  { Icon: MapPin, label: 'Location', value: 'Purok Laloma Camarin Caloocan City', href: null },
];

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socials = [
  { SvgIcon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/renalyn.giray.2024' },
  { SvgIcon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/Renaly.n' },
  { SvgIcon: LinkedInIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/renalyngiray' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      await axios.post('/api/portfolio/contact', form);
      setStatus({ type: 'success', msg: 'Message sent successfully! I will get back to you soon.' });
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again later.' });
    }
    setSending(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <span className={styles.sectionNum} aria-hidden="true">05</span>
        <div className={styles.header}>
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <div className="section-title-underline" />
        </div>

        <div className={styles.grid}>
          {/* ── Contact Info ── */}
          <div className={styles.infoCol}>
            <div className={styles.infoList}>
              {contactItems.map(({ Icon, label, value, href }) => (
                <div key={label} className={styles.infoItem}>
                  <div className={styles.iconBox} aria-hidden="true">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <div>
                    <p className={styles.infoLabel}>{label}</p>
                    {href ? (
                      <a href={href} className={styles.infoValue}>{value}</a>
                    ) : (
                      <p className={styles.infoValue}>{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialsWrap}>
              <p className={styles.socialsLabel}>Follow Me</p>
              <div className={styles.socialIcons}>
              {socials.map(({ SvgIcon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialBtn}
                    aria-label={label}
                    title={label}
                  >
                    <SvgIcon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className={styles.input}
                  placeholder="Renalyn Giray"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className={styles.input}
                  placeholder="renagiray17@gmail.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Your message here..."
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {status && (
              <p className={`${styles.statusMsg} ${styles[status.type]}`} role="alert">
                {status.msg}
              </p>
            )}

            <button type="submit" className={styles.submitBtn} disabled={sending}>
              {sending ? (
                'Sending…'
              ) : (
                <>
                  <Send size={15} strokeWidth={2} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

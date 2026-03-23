import React, { useEffect, useState } from 'react';
import styles from './Footer.module.css';

const modalContent = {
  terms: {
    title: 'Terms & Conditions',
    sections: [
      {
        heading: 'Use of This Portfolio',
        body:
          'This website is provided to present my work, skills, and contact information. You may browse and reference the content for personal or professional review, but you may not copy, republish, or resell any materials without permission.',
      },
      {
        heading: 'Project Content',
        body:
          'Case studies, visuals, and code samples shown here are for demonstration purposes. Some projects may contain confidential, academic, or client-sensitive details that have been summarized or adapted.',
      },
      {
        heading: 'Contact Submissions',
        body:
          'If you contact me through this site, you agree to provide accurate information and to use the form only for legitimate inquiries related to collaboration, hiring, or project discussions.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    sections: [
      {
        heading: 'Information I Collect',
        body:
          'This site may collect the personal information you choose to submit, such as your name, email address, and message through the contact form.',
      },
      {
        heading: 'How Information Is Used',
        body:
          'Submitted details are used only to respond to your inquiries, discuss opportunities, or continue communication you requested. Your information is not sold or shared for marketing purposes.',
      },
      {
        heading: 'Data and Security',
        body:
          'Reasonable steps are taken to handle submitted data responsibly, but no website or transmission method can guarantee complete security. By using this site, you acknowledge that risk.',
      },
    ],
  },
};

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  useEffect(() => {
    if (!activeModal) {
      return undefined;
    }

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setActiveModal(null);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal]);

  const currentModal = activeModal ? modalContent[activeModal] : null;

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Renalyn G. Giray. All rights reserved.
          </p>
          <nav className={styles.links} aria-label="Footer navigation">
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => setActiveModal('terms')}
            >
              Terms &amp; Conditions
            </button>
            <span className={styles.sep} aria-hidden="true">|</span>
            <button
              type="button"
              className={styles.linkButton}
              onClick={() => setActiveModal('privacy')}
            >
              Privacy Policy
            </button>
          </nav>
        </div>
      </footer>

      {currentModal && (
        <div
          className={styles.modalOverlay}
          onClick={() => setActiveModal(null)}
          role="presentation"
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="footer-modal-title"
            onClick={event => event.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <h3 id="footer-modal-title" className={styles.modalTitle}>
                {currentModal.title}
              </h3>
              <button
                type="button"
                className={styles.closeButton}
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className={styles.modalBody}>
              {currentModal.sections.map(section => (
                <div key={section.heading} className={styles.modalSection}>
                  <h4 className={styles.modalSectionTitle}>{section.heading}</h4>
                  <p className={styles.modalText}>{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;

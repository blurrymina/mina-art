import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="about">
      <h2 data-key="about-title" className="section-fade">{t('about-title')}</h2>
      <p data-key="about-description" className="section-fade">{t('about-description')}</p>
      <div className="social">
        <a href="https://www.instagram.com/blurryminah/" target="_blank" aria-label="Instagram" className="section-fade">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@blurryminah" target="_blank" aria-label="TikTok" className="section-fade">
          <i className="fab fa-tiktok"></i>
        </a>
      </div>
    </section>
  );
};

export default About;

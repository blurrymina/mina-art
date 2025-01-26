import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="hero">
      <div>
        <h1 data-key="hero-welcome" className="section-fade">
          {t('hero-welcome')}
        </h1>
      </div>
    </section>
  );
};

export default Hero;

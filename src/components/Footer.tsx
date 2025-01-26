import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <p data-key="footer-text">&copy; 2025 {t('footer-text')}</p>
    </footer>
  );
};

export default Footer;

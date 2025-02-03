import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleScrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default anchor behavior
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header>
      <div className="logo" data-key="logo">
        {t('logo')}
      </div>
      <div className="language-selector">
        <select onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">EN</option>
          <option value="ar">AR</option>
          <option value="fr">FR</option>
          <option value="ko">KO</option>
        </select>
      </div>
      <nav>
        <ul>
          <li><a href="#" onClick={(e) => handleScrollToSection('hero', e)} data-key="home">{t('home')}</a></li>
          <li><a href="#" onClick={(e) => handleScrollToSection('gallery', e)} data-key="gallery">{t('gallery')}</a></li>
          <li><a href="#" onClick={(e) => handleScrollToSection('painting-game', e)} data-key="draw">{t('draw')}</a></li>
          <li><a href="#" onClick={(e) => handleScrollToSection('about', e)} data-key="about">{t('about')}</a></li>
        </ul>
      </nav>
    </header>
  );
};


export default Header;

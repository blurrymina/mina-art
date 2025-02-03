import React from 'react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault(); // Prevent default anchor link behavior

    // Scroll to the section
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      
      // Clear the URL without reloading the page
      window.history.pushState({}, '', window.location.pathname);
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
          <li><a href="#hero" data-key="home" onClick={(e) => handleClick(e, 'hero')}>{t('home')}</a></li>
          <li><a href="#gallery" data-key="gallery" onClick={(e) => handleClick(e, 'gallery')}>{t('gallery')}</a></li>
          <li><a href="#painting-game" data-key="draw" onClick={(e) => handleClick(e, 'painting-game')}>{t('draw')}</a></li>
          <li><a href="#about" data-key="about" onClick={(e) => handleClick(e, 'about')}>{t('about')}</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

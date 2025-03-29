import React from 'react';
import { useTranslation } from 'react-i18next';

const PaintingGame: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="painting-game" className="painting-game">
      <h2 data-key="drawing-title" className="section-fade">{t('drawing-title')}</h2>
      <iframe src="https://paint.js.org/" title="Painting Game"></iframe>
    </section>
  );
};

export default PaintingGame;

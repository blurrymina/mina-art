import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { get, ref as dbRef } from 'firebase/database';
import { database } from '../configs/firebase';
import { useNavigate } from 'react-router-dom'; 

interface Image {
  id: string;
  order: number;
  blob: string;
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState<Image[]>([]);
  const [popupImage, setPopupImage] = useState<string | null>(null);
  const [popupIndex, setPopupIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const itemsPerPage = 1;
  const maxPages = 4;

  useEffect(() => {
    if (popupImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [popupImage]);

  const fetchImages = async () => {
    try {
      const imagesRef = dbRef(database, 'images');
      const snapshot = await get(imagesRef);
      if (snapshot.exists()) {
        const imagesData = snapshot.val();
        const imageList = Object.keys(imagesData).map((key) => ({
          id: key,
          ...imagesData[key],
        }));
        imageList.sort((a, b) => a.order - b.order);
        setImages(imageList);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImagesForPage = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    return images.slice(startIndex, startIndex + itemsPerPage);
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(images.length / itemsPerPage);
    const paginationButtons = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPages) {
      if (currentPage <= Math.ceil(maxPages / 2)) {
        endPage = maxPages;
      } else if (currentPage + Math.floor(maxPages / 2) >= totalPages) {
        startPage = totalPages - maxPages + 1;
      } else {
        startPage = currentPage - Math.floor(maxPages / 2);
        endPage = currentPage + Math.floor(maxPages / 2);
      }
    }

    if (startPage > 1) paginationButtons.push(<button key="first" onClick={() => setCurrentPage(1)}>{t('Start')}</button>);
    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button key={i} className={i === currentPage ? 'active' : ''} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    if (endPage < totalPages) paginationButtons.push(<button key="last" onClick={() => setCurrentPage(totalPages)}>{t('End')}</button>);

    return paginationButtons;
  };

  const showPreviousImage = () => {
    if (popupIndex !== null && popupIndex > 0) {
      const newIndex = popupIndex - 1;
      setPopupIndex(newIndex);
      setPopupImage(`data:image/png;base64,${images[newIndex].blob}`);
  
      // Sync page
      const newPage = Math.floor(newIndex / itemsPerPage) + 1;
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    }
  };
  
  const showNextImage = () => {
    if (popupIndex !== null && popupIndex < images.length - 1) {
      const newIndex = popupIndex + 1;
      setPopupIndex(newIndex);
      setPopupImage(`data:image/png;base64,${images[newIndex].blob}`);
  
      // Sync page
      const newPage = Math.floor(newIndex / itemsPerPage) + 1;
      if (newPage !== currentPage) {
        setCurrentPage(newPage);
      }
    }
  };
  

  return (
    <section id="gallery" className="gallery">
      <h1 data-key="gallery-title" className="section-fade">{t('gallery-title')}</h1>

      <button
        data-key="gallery-random"
        id="randomImageBtn"
        onClick={() => {
          let randomPage = Math.floor(Math.random() * Math.ceil(images.length / itemsPerPage)) + 1;
          while (randomPage === currentPage) {
            randomPage = Math.floor(Math.random() * Math.ceil(images.length / itemsPerPage)) + 1;
          }
          setCurrentPage(randomPage);
        }}
        disabled={loading}
        className={loading ? 'disabled' : "section-fade"}
      >
        {t('gallery-random')}
      </button>

      {loading ? (
        <div className="loading-spinner">
          <span>Loading images...</span>
        </div>
      ) : (
        <div id="gallery-container">
          {fetchImagesForPage(currentPage).map((image) => (
            <img
              key={image.id}
              src={`data:image/png;base64,${image.blob}`}
              alt={`Artwork ${image.id}`}
              className="lazy-load"
              onClick={() => {
                const index = images.findIndex((img) => img.id === image.id);
                setPopupIndex(index);
                setPopupImage(`data:image/png;base64,${image.blob}`);
              }}
            />
          ))}
        </div>
      )}

      <div id="pagination-controls" className="section-fade">{renderPagination()}</div>
      <button className="section-fade" onClick={() => navigate('/admin')}>{t('go-to-admin')}</button>

      {popupImage && (
      <div
        className="popup"
        onClick={() => setPopupImage(null)}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <img
          src={popupImage}
          alt="Popup Artwork"
          onClick={(e) => e.stopPropagation()}
        />
        <div className="popup-nav" onClick={(e) => e.stopPropagation()}>
          {popupIndex! > 0 && (
            <span className="popup-arrow left" onClick={showPreviousImage}>
              &#8592;
            </span>
          )}
          {popupIndex! < images.length - 1 && (
            <span className="popup-arrow right" onClick={showNextImage}>
              &#8594;
            </span>
          )}
        </div>

        <span className="close" onClick={() => setPopupImage(null)}>
          &times;
        </span>
      </div>
    )}
    </section>
  );
};

export default Gallery;

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { get, ref as dbRef } from 'firebase/database';
import { database } from '../configs/firebase';

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
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  const itemsPerPage = 1;
  const maxPages = 4;

  useEffect(() => {
    if (popupImage) {
      document.body.style.overflow = 'hidden'; // Disable scrolling when popup is open
    } else {
      document.body.style.overflow = ''; // Re-enable scrolling when popup is closed
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
        
        // Sort images by their 'order' field
        imageList.sort((a, b) => a.order - b.order);
        
        setImages(imageList); // Set the sorted images
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false); // Set loading to false after fetch
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

    if (startPage > 1) paginationButtons.push(<button key="first" onClick={() => setCurrentPage(1)}>Start</button>);
    for (let i = startPage; i <= endPage; i++) {
      paginationButtons.push(
        <button key={i} className={i === currentPage ? 'active' : ''} onClick={() => setCurrentPage(i)}>
          {i}
        </button>
      );
    }
    if (endPage < totalPages) paginationButtons.push(<button key="last" onClick={() => setCurrentPage(totalPages)}>End</button>);

    return paginationButtons;
  };

  return (
    <section id="gallery" className="gallery">
      <h1 data-key="gallery-title">{t('gallery-title')}</h1>
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
      >
        {t('gallery-random')}
      </button>

      {/* Loading spinner */}
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
              onClick={() => setPopupImage(`data:image/png;base64,${image.blob}`)}
            />
          ))}
        </div>
      )}

      <div id="pagination-controls">{renderPagination()}</div>

      {popupImage && (
        <div className="popup" onClick={() => setPopupImage(null)} style={{ display: 'flex' }}>
          <img src={popupImage} alt="Popup Artwork" />
          <span className="close" onClick={() => setPopupImage(null)}>&times;</span>
        </div>
      )}
    </section>
  );
};

export default Gallery;

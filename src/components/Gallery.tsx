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
  const navigate = useNavigate(); 
  const [images, setImages] = useState<Image[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [popupImage, setPopupImage] = useState<string | null>(null);

  // Disable scrolling when the popup is visible
  useEffect(() => {
    if (popupImage) {
      document.body.style.overflow = 'hidden';  // Disable scroll
    } else {
      document.body.style.overflow = '';  // Enable scroll
    }
  }, [popupImage]);

  // Fetch images from Firebase when the component mounts
  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = dbRef(database, 'images');  
      try {
        const snapshot = await get(imagesRef);
        if (snapshot.exists()) {
          const imagesData = snapshot.val();
          const imageList = Object.keys(imagesData).map((key) => ({
            id: key,
            ...imagesData[key],
          }));

          // Sort images by order
          const sortedImages = imageList.sort((a, b) => a.order - b.order);
          setImages(sortedImages);
        }
      } catch (error) {
        console.error('Error fetching images from Firebase:', error);
      }
    };

    fetchImages();
  }, []);

  const renderGalleryPage = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, images.length);
    return images.slice(startIndex, endIndex).map((image) => (
      <img
        key={image.id}
        src={`data:image/png;base64,${image.blob}`}
        alt={`Artwork ${image.id}`}
        className="rounded shadow-md cursor-pointer"
        onClick={() => setPopupImage(`data:image/png;base64,${image.blob}`)}
      />
    ));
  };

  const handleClosePopup = () => {
    setPopupImage(null);
  };

  return (
    <section id="gallery" className="gallery">
      <h1 data-key="gallery-title" className="section-fade">{t('gallery-title')}</h1>
      
      <button
        data-key="gallery-random"
        id="randomImageBtn"
        onClick={() => {
          const randomIndex = Math.floor(Math.random() * images.length);
          setPopupImage(`data:image/png;base64,${images[randomIndex].blob}`);
        }}
      >
        {t('gallery-random')}
      </button>

      <div id="gallery-container">{renderGalleryPage()}</div>
      
      <div id="pagination-controls" className="section-fade">
        {Array.from({ length: Math.ceil(images.length / itemsPerPage) }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-pink-400 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Navigation Button to Admin Panel */}
      <button
        onClick={() => navigate('/admin')} 
        className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
      >
        Go to Admin Panel
      </button>

      {/* Popup Image */}
      {popupImage && (
        <div 
          className="popup-overlay" 
          onClick={handleClosePopup} 
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 9999 }}
        >
          <div 
            className="popup-content" 
            style={{ position: 'relative', maxWidth: '90%', maxHeight: '90%' }}
            onClick={(e) => e.stopPropagation()}  // Prevent closing popup if image is clicked
          >
            <span 
              className="close" 
              onClick={handleClosePopup} 
              style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '30px', color: 'white', cursor: 'pointer' }}
            >
              &times;
            </span>
            <img src={popupImage} alt="Popup Artwork" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

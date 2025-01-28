import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { get, ref as dbRef, set, remove, update, push } from 'firebase/database';
import { database } from '../configs/firebase';

interface Image {
  id: string;
  order: number;
  blob: string;
}

const AdminPanel: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageOrder, setImageOrder] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<string | null>(null); // Track loading for delete
  const [isLoadingReorder, setIsLoadingReorder] = useState<string | null>(null); // Track loading for reorder
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/login');
      }
    });

    const fetchImages = async () => {
      setIsLoadingImages(true);
      const imagesRef = dbRef(database, 'images');
      try {
        const snapshot = await get(imagesRef);
        if (snapshot.exists()) {
          const imagesData = snapshot.val();
          const imageList = Object.keys(imagesData).map((key) => ({
            id: key,
            ...imagesData[key],
          }));

          const sortedImages = imageList.sort((a, b) => a.order - b.order);
          setImages(sortedImages);
          setImageOrder(sortedImages.length + 1); // Set order to the next available spot
        }
      } catch (error) {
        setError('Failed to fetch images');
        console.error(error);
      } finally {
        setIsLoadingImages(false);
      }
    };

    fetchImages();
    return () => unsubscribe();
  }, [navigate]);

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      const reader = new FileReader();

      reader.onloadend = async () => {
        const arrayBuffer = reader.result as ArrayBuffer;
        const binaryData = new Uint8Array(arrayBuffer);

        const binaryString = Array.from(binaryData)
          .map((byte) => String.fromCharCode(byte))
          .join('');
        const binaryBlob = btoa(binaryString);

        const imagesRef = dbRef(database, 'images');
        const newImageRef = push(imagesRef);
        const newImage: Image = {
          id: newImageRef.key!,
          order: imageOrder,
          blob: binaryBlob,
        };

        await set(newImageRef, newImage);

        setImages((prevImages) => [...prevImages, newImage]);
        setSelectedFile(null);
        setImageOrder((prev) => prev + 1);

        setIsUploading(false);
      };

      reader.readAsArrayBuffer(selectedFile);
    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error(err);
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    setIsLoadingDelete(imageId); // Set loading state for delete
    try {
      const imageRef = dbRef(database, `images/${imageId}`);
      await remove(imageRef);
      setImages((prevImages) => prevImages.filter((image) => image.id !== imageId));
      setIsLoadingDelete(null); // Reset loading state
    } catch (err) {
      setError('Failed to delete image.');
      console.error(err);
      setIsLoadingDelete(null);
    }
  };

  const handleReorderImage = async (imageId: string, direction: 'up' | 'down') => {
    setIsLoadingReorder(imageId); // Set loading state for reorder
    const index = images.findIndex((image) => image.id === imageId);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;

    const updatedImages = [...images];
    const selectedImage = updatedImages[index];
    const targetImage = updatedImages[newIndex];

    const tempOrder = selectedImage.order;
    selectedImage.order = targetImage.order;
    targetImage.order = tempOrder;

    updatedImages[index] = targetImage;
    updatedImages[newIndex] = selectedImage;

    try {
      const updatedSelectedImageRef = dbRef(database, `images/${selectedImage.id}`);
      const updatedTargetImageRef = dbRef(database, `images/${targetImage.id}`);

      await update(updatedSelectedImageRef, { order: selectedImage.order });
      await update(updatedTargetImageRef, { order: targetImage.order });

      setImages(updatedImages);
      setIsLoadingReorder(null); // Reset loading state
    } catch (err) {
      setError('Failed to reorder image.');
      console.error(err);
      setIsLoadingReorder(null);
    }
  };

  return (
    <section id="admin-panel" className="admin-panel">
    <div>
      <h2>Admin Panel</h2>
      {error && <p>{error}</p>}

      {isLoadingImages && <div className="loading-spinner">Loading images...</div>}

      <div className="upload-container">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
          accept="image/*"
        />
        <button onClick={handleImageUpload} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>

      {isUploading && <div className="loading-spinner">Uploading image...</div>}

      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img
              src={`data:image/png;base64,${image.blob}`}
              alt="Uploaded"
              style={{ maxWidth: '200px', maxHeight: '200px' }}
            />
            <div className="image-actions">
              <button
                onClick={() => handleDeleteImage(image.id)}
                disabled={isLoadingDelete === image.id} // Disable delete button while loading
              >
                {isLoadingDelete === image.id ? 'Deleting...' : 'Delete'}
              </button>
              <button
                onClick={() => handleReorderImage(image.id, 'up')}
                disabled={image.order === 1 || isLoadingReorder === image.id} // Disable reorder buttons while loading
              >
                {isLoadingReorder === image.id ? 'Reordering...' : 'Move Up'}
              </button>
              <button
                onClick={() => handleReorderImage(image.id, 'down')}
                disabled={image.order === images.length || isLoadingReorder === image.id}
              >
                {isLoadingReorder === image.id ? 'Reordering...' : 'Move Down'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default AdminPanel;

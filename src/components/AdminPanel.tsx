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
  const [error, setError] = useState<string | null>(null);
  const [isLoadingImages, setIsLoadingImages] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState<string | null>(null);
  const [isLoadingReorder, setIsLoadingReorder] = useState<string | null>(null);
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
          let imagesData = snapshot.val();
          let imageList: Image[] = Object.keys(imagesData).map((key) => ({
            id: key,
            ...imagesData[key],
          }));

          // Sort images by `order`
          imageList.sort((a, b) => a.order - b.order);

          // Reassign order to maintain sequence from 1 to length
          imageList = imageList.map((image, index) => ({
            ...image,
            order: index + 1,
          }));

          setImages(imageList);

          // Update database if order numbers were incorrect
          const updates: { [key: string]: number } = {};
          imageList.forEach((image) => {
            updates[`images/${image.id}/order`] = image.order;
          });
          await update(dbRef(database), updates);
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
        const newOrder = images.length + 1;

        const newImage: Image = {
          id: newImageRef.key!,
          order: newOrder,
          blob: binaryBlob,
        };

        await set(newImageRef, newImage);

        setImages([...images, newImage]);
        setSelectedFile(null);
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
    setIsLoadingDelete(imageId);
    try {
      await remove(dbRef(database, `images/${imageId}`));

      // Filter out the deleted image
      let updatedImages = images.filter((image) => image.id !== imageId);

      // Reassign order
      updatedImages = updatedImages.map((image, index) => ({
        ...image,
        order: index + 1,
      }));

      setImages(updatedImages);

      // Update database order
      const updates: { [key: string]: number } = {};
      updatedImages.forEach((image) => {
        updates[`images/${image.id}/order`] = image.order;
      });
      await update(dbRef(database), updates);
    } catch (err) {
      setError('Failed to delete image.');
      console.error(err);
    } finally {
      setIsLoadingDelete(null);
    }
  };

  const handleReorderImage = async (imageId: string, direction: 'up' | 'down') => {
    setIsLoadingReorder(imageId);
    const index = images.findIndex((image) => image.id === imageId);
    if (index === -1) return;

    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= images.length) return;

    let updatedImages = [...images];
    [updatedImages[index], updatedImages[newIndex]] = [updatedImages[newIndex], updatedImages[index]];

    // Reassign order from 1 to length
    updatedImages = updatedImages.map((image, i) => ({
      ...image,
      order: i + 1,
    }));

    setImages(updatedImages);

    // Update database order
    const updates: { [key: string]: number } = {};
    updatedImages.forEach((image) => {
      updates[`images/${image.id}/order`] = image.order;
    });

    try {
      await update(dbRef(database), updates);
    } catch (err) {
      setError('Failed to reorder image.');
      console.error(err);
    } finally {
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
          <input type="file" onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)} accept="image/*" />
          <button onClick={handleImageUpload} disabled={isUploading}>{isUploading ? 'Uploading...' : 'Upload Image'}</button>
        </div>

        <div className="image-list">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={`data:image/png;base64,${image.blob}`} alt="Uploaded" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              <div className="image-actions">
                <button onClick={() => handleDeleteImage(image.id)} disabled={isLoadingDelete === image.id}>{isLoadingDelete === image.id ? 'Deleting...' : 'Delete'}</button>
                <button onClick={() => handleReorderImage(image.id, 'up')} disabled={image.order === 1 || isLoadingReorder === image.id}>Move Up</button>
                <button onClick={() => handleReorderImage(image.id, 'down')} disabled={image.order === images.length || isLoadingReorder === image.id}>Move Down</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;

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
  const [isUploading, setIsUploading] = useState<boolean>(false); // Tracks upload state
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate('/mina-art/login');
      }
    });

    const fetchImages = async () => {
      setIsLoadingImages(true); // Set loading to true when fetching images
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
        }
      } catch (error) {
        setError('Failed to fetch images');
        console.error(error);
      } finally {
        setIsLoadingImages(false); // Set loading to false when fetching is complete
      }
    };

    fetchImages();
    return () => unsubscribe();
  }, [navigate]);

  const handleImageUpload = async () => {
    if (!selectedFile) return;

    // Check if the file is an image based on its MIME type
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please select a valid image file.');
      return;
    }

    // Trigger the loading state immediately
    setIsUploading(true);
    setError(null);  // Clear any previous errors

    try {
      const reader = new FileReader();

      // This runs when the file reading is complete
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
          blob: binaryBlob,  // Store binary data as a string
        };

        // Start Firebase write operation
        await set(newImageRef, newImage);

        // Update local state after upload is complete
        setImages((prevImages) => [...prevImages, newImage]);
        setSelectedFile(null);  // Clear selected file input
        setImageOrder((prev) => prev + 1);  // Increment order for next image

        // Complete upload state
        setIsUploading(false);  // Hide spinner once done
      };

      // Begin file reading
      reader.readAsArrayBuffer(selectedFile);

    } catch (err) {
      setError('Failed to upload image. Please try again.');
      console.error(err);

      // Hide spinner on error
      setIsUploading(false);
    }
  };

  const handleDeleteImage = async (imageId: string) => {
    try {
      const imageRef = dbRef(database, `images/${imageId}`);
      await remove(imageRef);
      setImages((prevImages) => prevImages.filter((image) => image.id !== imageId));
    } catch (err) {
      setError('Failed to delete image.');
    }
  };

  const handleReorderImage = async (imageId: string, newOrder: number) => {
    try {
      const imageRef = dbRef(database, `images/${imageId}`);
      await update(imageRef, { order: newOrder });

      setImages((prevImages) =>
        prevImages.map((image) =>
          image.id === imageId ? { ...image, order: newOrder } : image
        )
      );
    } catch (err) {
      setError('Failed to reorder image.');
    }
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      {error && <p>{error}</p>}

      {isLoadingImages && <div className="loading-spinner">Loading images...</div>}

      <div className="upload-container">
        <input
          type="file"
          onChange={(e) => setSelectedFile(e.target.files ? e.target.files[0] : null)}
          accept="image/*" // Restricts file dialog to image files
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
              <button onClick={() => handleDeleteImage(image.id)}>Delete</button>
              <button onClick={() => handleReorderImage(image.id, image.order - 1)}>Move Up</button>
              <button onClick={() => handleReorderImage(image.id, image.order + 1)}>Move Down</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;

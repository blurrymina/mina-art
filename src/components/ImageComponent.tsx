// ImageComponent.tsx
import React from 'react';

interface ImageProps {
  imageId: string;
  imageUrl: string;
  onDelete: (id: string) => void;
}

const ImageComponent: React.FC<ImageProps> = ({ imageId, imageUrl, onDelete }) => {
  return (
    <div>
      <img src={imageUrl} alt="Artwork" />
      <button onClick={() => onDelete(imageId)}>Delete</button>
    </div>
  );
};

export default ImageComponent;

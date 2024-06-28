// ImageGallery.js
import React, { useEffect, useState } from 'react';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    if (images?.variants?.edges?.length > 0) {
      setSelectedImage(images.variants.edges[0].node.image.url);
    }
  }, [images]);

  return (
    <div className="flex flex-row items-center justify-start lg:max-w-7xl lg:gap-30 sm:gap-20 ">
      <div className="lg:grid lg:max-w-7xl lg:grid-cols-1 lg:grid-rows-[auto] lg:gap-5">
        {images?.variants?.edges?.map((item, index) => (
          <img
            key={index}
            src={item?.node?.image?.url}
            alt={`Thumbnail ${index + 1}`}
            className={`w-20 h-20 object-cover cursor-pointer rounded ${selectedImage === item?.node?.image?.url ? 'border-2 border-blue-500' : 'border'}`}
            onClick={() => setSelectedImage(item?.node?.image?.url)}
          />
        ))}
      </div>
      <div className="w-80 h-80 ml-10">
        <img src={selectedImage} alt="Selected" className="w-full h-full object-cover rounded" />
      </div>
    </div>
  );
};

export default ImageGallery;

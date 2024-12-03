import React, { useState } from 'react';

const ImageGallery = () => {
  // Array of image URLs
  const UrlArr = [
    'https://w7.pngwing.com/pngs/38/708/png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png',
    'https://www.shutterstock.com/image-illustration/white-city-car-isolated-on-600nw-2350699241.jpg',
    'https://www.freeiconspng.com/thumbs/car-png/land-rover-range-rover-car-png-25.png',
  ];

  // State to manage the current image URL
  const [imgUrl, setImgUrl] = useState(UrlArr[0]);

  // Event handler for changing the image
  const handleImageChanger = (urlIndex) => {
    setImgUrl(UrlArr[urlIndex]);
  };

  // Styles
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  };

  const thumbnailStyle = {
    display: 'flex',
    gap: '10px',
  };

  return (
    <div style={style}>
      {/* Main Image */}
      <img
        src={imgUrl}
        alt="Current"
        style={{ width: '300px', height: '200px', border: '1px solid black' }}
      />

      {/* Thumbnails */}
      <div style={thumbnailStyle}>
        {UrlArr.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleImageChanger(index)}
            style={{
              width: '100px',
              height: '100px',
              cursor: 'pointer',
              border: imgUrl === url ? '2px solid blue' : '1px solid gray',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

import React from 'react';

const Images = ({ images }) => (
  <div className="gallery">
    {images.map(image => (
      <div className="imgContainer" key={image._id}>
        <img src={`http://ec2-54-234-62-6.compute-1.amazonaws.com:8080/public/images/${image.image}`} />
      </div>
    ))}
  </div>
);

export default Images;
import React from 'react';
import Img1 from '../../assets/images/taha-1.webp';
import Img2 from '../../assets/images/taha-2.webp';
import Img3 from '../../assets/images/taha-3.webp';

const images = [Img1, Img2, Img3];

const GallerySec = () => {
  return (
    <div className="pt-[4rem]">
      <div className="container-style grid grid-cols-1 gap-[2.4rem] md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, idx) => (
          <div
            key={idx}
            className="aspect-square w-full overflow-hidden rounded-[3.2rem]"
          >
            <img
              src={image}
              alt={`Gallery image ${idx + 1}`}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GallerySec;

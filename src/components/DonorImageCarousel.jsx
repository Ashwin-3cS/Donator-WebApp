import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DonorImageCarousel = () => {
 const carouselImages = [
    'https://picsum.photos/id/1084/536/354?grayscale',
    'https://picsum.photos/seed/picsum/536/354',
    'https://picsum.photos/id/237/536/354',
 ];

 return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
      containerCustomStyle={{ display: 'flex', justifyContent: 'center' }}
    >
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img src={image}
            alt={`Image ${index + 1}`}
            style={{ width: '35%', height: '35%', borderRadius: '10%' }} 
          />
        </div>
      ))}
    </Carousel>
 );
};

export default DonorImageCarousel;
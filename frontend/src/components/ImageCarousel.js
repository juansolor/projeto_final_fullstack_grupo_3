import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  const images = [
    'http://localhost:3001/uploads/banner/banner1.jpg',
    'http://localhost:3001/uploads/banner/banner2.jpg',
    'http://localhost:3001/uploads/banner/banner3.jpg',
    'http://localhost:3001/uploads/banner/banner4.jpg',
  ];

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Banner ${index + 1}`} className="img-fluid w-100" style={{ maxHeight: '400px', objectFit: 'cover' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
import React, { useState, useEffect } from 'react';
import carouselStyle from '../Components/Carousel.module.css'; 

import slider1 from '../Images/S1.png';
import slider2 from '../Images/S2.png';
import slider3 from '../Images/S3.png';
import slider4 from '../Images/S4.png';
// 1st: e7b645
const Carousel = ({onImageChanges}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [slider1, slider2, slider3, slider4];
    const colors = ['#E9DCC9', '#FFFDD0', '#C19A6B', '#333d29'];

    useEffect(() => {
        if (onImageChanges) {
            onImageChanges(colors[currentIndex]);
        }
    }, [currentIndex, onImageChanges]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className={carouselStyle.carousel}>
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`${carouselStyle.carouselImage} ${index === currentIndex ? carouselStyle.active : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                />
            ))}
            <button className={carouselStyle.prev} onClick={handlePrev}>‹</button>
            <button className={carouselStyle.next} onClick={handleNext}>›</button>
        </div>
    );
};

export default Carousel;

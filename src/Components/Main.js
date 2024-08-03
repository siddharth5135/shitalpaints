import React, { useState } from 'react';
import Carousel from '../Components/Carousel';
import carouselStyle from '../Components/Landing.module.css';

export default function Main() {

    const [textColor, setTextColor] = useState("#E9DCC9");

    const handleImageChanges = (color) => {
        setTextColor(color)
    }

    return (
        <>
        <div className={carouselStyle.landingPage}>
            <Carousel onImageChanges = {handleImageChanges}/>
            <div className={carouselStyle.leftContent}>
                <h1 className={carouselStyle.gothica1black} style={{ color: textColor }}>Shital Paints</h1>
                <h3 className={carouselStyle.gothica1blackh3}>Color Your World with Elegance</h3>
                {/* <br></br> */}
                <button className={carouselStyle.ctaButton}>Learn More</button>
            </div>
        </div>
    </>
    );
}

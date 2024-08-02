import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
// import './Landing_page.css'; // Main CSS file

export default function Main() {
    return (
        <div className="landing-page">
            <Header />
            <Carousel />
            <div className="content">
                <h1>Welcome to Our Website</h1>
                <p>We are glad to have you here!</p>
            </div>
        </div>
    );
}

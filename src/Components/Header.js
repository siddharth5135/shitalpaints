import React, { useState } from 'react';
import headerStyle from '../Components/Header.module.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.logo}>MyLogo</div>
            <nav className={`${headerStyle.nav} ${isMenuOpen ? headerStyle.open : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <button className={headerStyle.hamburger} onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;

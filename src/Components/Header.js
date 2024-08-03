import React, { useState } from 'react';
import headerStyle from '../Components/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Header = ({ className }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [darkMode,setDarkMode] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`${headerStyle.header} ${className}`}>
            <div className={headerStyle.logo}>MyLogo</div>
            <nav className={`${headerStyle.nav} ${isMenuOpen ? headerStyle.open : ''}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><button type="button" class="btn btn-dark" onClick={()=>{
                        document.body.classList.toggle('dark-mode');
                        setDarkMode((prev)=>!prev)
                    }}>{darkMode ? 'Dark' : 'Light'}</button></li>
                    <div className={headerStyle.phone}>
                    <li>
                        <FontAwesomeIcon icon={faPhone} /> 
                        <a id={headerStyle.number} href="#phone">7874405979</a>
                    </li>
                    </div>

                </ul>
            </nav>
            <button className={headerStyle.hamburger} onClick={toggleMenu}>
                ☰
            </button>
        </header>
    );
};

export default Header;

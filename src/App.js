import React, { useEffect, useState } from 'react';
import './App.css';
import Main from '../src/Components/Main';
import Header from '../src/Components/Header';
import ProductsSection from './Components/ProductsSection';
function App() {
  const [headerClass, setHeaderClass] = useState('');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHeaderClass('sticky');
    } else {
      setHeaderClass('');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Header className={headerClass} />
      <Main />
      <ProductsSection></ProductsSection>
    </>
  );
}

export default App;

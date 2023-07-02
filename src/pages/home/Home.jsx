import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../../pages/home/Home.css';
import mainimg from '../../img/main-img.svg';
const Home = () => {

  const [fixedImage, setFixedImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setFixedImage(true);
      } else {
        setFixedImage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <div className="main">
        <div className={`image-wrapper ${fixedImage ? 'fixed' : ''}`}>
          <img src={mainimg} />
        </div>
        <div className="main-text">
          <div className="main-text-title">
            <p className="main-text-title-p">Professional Photographer</p>
            Scott Stevens</div>
          <div className="main-text-desc"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dolor sit amet.</p></div>
          <div className="main-text-button"><button>Read More</button></div>
        </div>
        
      </div>
      <Footer />
      
    </div>
  )
}

export default Home
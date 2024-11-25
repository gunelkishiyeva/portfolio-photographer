import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import '../../pages/home/Home.css';
import nubar from '../../img/nubar.png';
import aboutme from '../../img/aboutme.png';
import firstblock from '../../img/firstblock.png';
import snblock from '../../img/snblock.png';
import thirdblock from '../../img/thirdblock.png';
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
      <div className="home">
      <div className="main">
<div className="introduce">
        <div className="aboutText">
          <h1 className="title">I'm Nubar Kishiyeva</h1>
          <p className="title-text">I am Nubar, a 28-year-old IT and Systems Engineering expert who loves teaching and always strives to learn more about software development and other skills in order to succeed in my field, and while I usually prefer to learn on my own, I’ve realized the advantages of having mentors and now offer that same support to my students, so come join me on this journey of embracing technology and constant learning.</p>
          <button className='learn-more'>Learn more</button>
       
        </div>
        <div className="aboutmepic">
          <img src={nubar}/>

        </div>
        </div>
        
        <div className="about-me">
          <div className="aboutmetextsection">
            <h1 className='aboutmetitle'>About Me</h1>
            <div className="elementor-element elementor-element-8572b3b elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="8572b3b" data-element_type="widget" data-widget_type="divider.default">
      <div className="elementor-widget-container">
        <div className="elementor-divider">
          <span className="elementor-divider-separator"></span>
        </div>
      </div>
    </div>
          <div className="aboutmetitletext">
            Nubar: Embracing the World of Technology Through Continuous Learning and Coding
          </div>
          <div className="aboutmetext">
          Hey there! I’m Nubar, a 28-year-old IT and Systems Engineering pro. Teaching is my jam and I’m always hungry to learn more about software development and other cool soft skills. I usually teach myself, but lately, I’ve realized how awesome it is to have mentors guiding me along the way. And guess what? I offer the same kind of support to my students! Let’s dive into the world of technology together, learn non-stop, and code our way to a better future!
          </div>
          <button className='learn-more'>Contact me</button>
        </div>
        <div className="aboutmesectionpic">
        <img src={aboutme}/>
        </div>
        </div>

        <div className="services">
        <div className="services-title">
          <h1 className="title">What Services I'm Providing</h1>
        </div>
        <div className="service-block">
          <div className="services-blocks">
          <img src={firstblock}/>
          <div className="services-block-title">Level up your tech skills with me!</div>
          <div className="services-block-text">Looking for a mentor to guide you through the world of IT? Join me as we navigate the ever-changing landscape of technology together! #ITMentorship</div>
          <a href=''>Read More</a>
          </div>
         
        </div>
        <div className="service-block">
          <div className="services-blocks">
          <img src={snblock}/>
          <div className="services-block-title">Level up your tech skills with me!</div>
          <div className="services-block-text">Looking for a mentor to guide you through the world of IT? Join me as we navigate the ever-changing landscape of technology together! #ITMentorship</div>
          <a href=''>Read More</a>
          </div>
         
        </div>
        <div className="service-block">
          <div className="services-blocks">
          <img src={thirdblock}/>
          <div className="services-block-title">Level up your tech skills with me!</div>
          <div className="services-block-text">Looking for a mentor to guide you through the world of IT? Join me as we navigate the ever-changing landscape of technology together! #ITMentorship</div>
          <a href=''>Read More</a>
          </div>
         
        </div>
        </div>
        
      </div>
      </div>
      <Footer />
      
    </div>
  )
}

export default Home
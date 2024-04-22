  import React, { useState, useEffect } from 'react';
  import './LandingPage.css';
  import Hero from '../../components/Hero/Hero';
  import Background from '../../components/Background/Background';

  const LandingPage = () => {
    let heroData = [
      { text1: "Share", text2: "Your Art." },
      { text1: "Express Yourself,", text2: "Anytime, Anywhere." },
      { text1: "Your Network,", text2: "Your Visual Story." }
    ];
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    useEffect(() => {
      const transitionInterval = setTimeout(() => {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
      }, 3000);

      return () => clearTimeout(transitionInterval); 
    }, [heroCount]); 

    const isHeroSection = (id) => id === 'hero';

    return (
      <div className="landing-page">
      <div className="background-wrapper">
        <Background playStatus={playStatus} heroCount={heroCount} />
      </div>

      <div className="hero-container">
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
      </div>
      
      <div id="about" className="section section-explore">
        {!isHeroSection('about') && <div className="solid-color-background"></div>}
        <h2 className="title">About</h2>
        <div className="grid">
          <div className="item">
            <h3 className="item-title">Features</h3>
            <p className="item-description">Not sure what to put here. Will check later</p>
          </div>
        </div>            
      </div>

      <div className="section section-about">
        {!isHeroSection('about') && <div className="solid-color-background"></div>}
        <h2 className="title">Meet the Team</h2>
        <div className="grid">
          <div className="item">
            <h3 className="item-title">Dala <span>Ibrahim</span></h3>
            <img src="" alt="" />
            <p className="item-description">Not sure what to put here. Will check later</p>
          </div>
          <div className="item">
            <h3 className="item-title">Maya <span>Taliha</span></h3>
            <img src="" alt="" />
            <p className="item-description">Not sure what to put here. Will check later</p>
          </div>
          <div className="item">
            <h3 className="item-title">Mira <span>Hussein</span></h3>
            <img src="" alt="" />
            <p className="item-description">Not sure what to put here. Will check later</p>
          </div>
          <div className="item">
            <h3 className="item-title">Mariam <span>Sonji</span></h3>
            <img src="" alt="" />
            <p className="item-description">Not sure what to put here. Will check later</p>
          </div>
        </div>
      </div>             

      <div id="contact" className="section section-contact">
        {!isHeroSection('contact') && <div className="solid-color-background"></div>}
        <h2 className="title">Contact Us</h2>
        <div className="grid">
          {/* Contact information */}
        </div>
      </div>
    </div>
  );
};

  export default LandingPage;

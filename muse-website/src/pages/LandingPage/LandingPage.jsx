import React, { useState, useEffect } from 'react';
import Background from '../../components/Background/Background';
import './LandingPage.css';
import Hero from '../../components/Hero/Hero';

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

    return (
        <div>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
            <div id="explore" className="section">
            <h2 className="title">Explore</h2>
            <div className="grid">
                <div className="item">
                {/* <img src="image.jpg" alt="Explore Item" className="explore-item-image" /> */}
                <h3 className="item-title">Features</h3>
                <p className="item-description">Not sure what to put here. Will check later</p>
                </div>
                </div>            
            </div>

            <div id="about" className="section">
                <h2 className="title">About Us</h2>
                <div className="grid">
                    <div className="item">
                    <h3 className="item-title">idk</h3>
                    <p className="item-description">Not sure what to put here. Will check later</p>
                    </div>
                </div>
            </div>            

            <div id="contact" className="section">
            <h2 className="title">Contact Us</h2>
                <div className="grid">
                    <div className="item">
                    <h3 className="item-title">idk</h3>
                    <p className="item-description">Not sure what to put here. Will check later</p>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default LandingPage;

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Background from '../../components/Background/Background';
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar'; 
import Hero from '../../components/Hero/Hero'

const LandingPage = () => {
    let heroData = [
        { text1: "Add", text2: "Text" },
        { text1: "Text", text2: "Add" },
        // { text1: "Add", text2: "Text" }
    ];
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

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
        </div>
    );
};

export default LandingPage;

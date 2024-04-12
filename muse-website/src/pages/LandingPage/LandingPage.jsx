import { useState } from 'react';
import Background from '../../components/Background/Background';
import './LandingPage.css';
import Hero from '../../components/Hero/Hero'

const LandingPage = () => {
    let heroData = [
        { text1: "Share", text2: "Your Art." },
        { text1: "Express Yourself,", text2: "Anytime, Anywhere." },
        { text1: "Your Network,", text2: "Your Visual Story." }
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

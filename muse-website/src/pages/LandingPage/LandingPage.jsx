import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Background from '../../components/Background/Background';
import './LandingPage.css';
import NavBar from '../../components/NavBar/NavBar'; 
const LandingPage = () => {
    let heroData = [
        { text1: "Add", text2: "Text" },
        { text1: "Add", text2: "Text" },
        // { text1: "Add", text2: "Text" }
    ];
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);

    return (
        <div>
            <Background playsStatus={playStatus} heroCount={heroCount} />
        </div>
    );
};

export default LandingPage;

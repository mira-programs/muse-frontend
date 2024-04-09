import { useState} from 'react'
import Background from '../../components/Background/Background'
import './LandingPage.css'

const LandingPage = () => {
    let heroData = [
        {text1: "Add", text2: "Text"},
        {text1: "Add", text2: "Text"},
        // {text1: "Add", text2: "Text"}
      ]
      const [heroCount, setHeroCount] = useState(2);
      const [playStatus, setPlayStatus] = useState(false);
    
  return (
    <div>
        <Background playsStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default LandingPage;

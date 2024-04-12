import './Hero.css'
// import icons..............
import { FaRegPlayCircle } from "react-icons/fa";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Hero = ({heroData, setHeroCount, heroCount, setPlayStatus, playStatus}) => {

  const handleIconClick = () => {
    setPlayStatus(!playStatus);
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <IoIosArrowForward />      
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
          {/* <li onClick={()->setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li> */}
        </ul>
        <div className="hero-play">
          <div>
            {playStatus ? (
              <FaRegCirclePause onClick={handleIconClick} />
            ) : (
              <FaRegPlayCircle onClick={handleIconClick} />
            )}
          </div>
          <p>See the video</p>
        </div>
      </div>
    </div>
  )
}

export default Hero;

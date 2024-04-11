import './Background.css'

import vid from '../../assets/vid.mp4'
import pic1 from '../../assets/starrynight.jpg'
import pic2 from '../../assets/photography.jpeg'

const Background = ({playStatus,heroCount}) => {
    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted> 
                <source src={vid} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount===0) {
        return <img src={pic1} className='background' alt="" />
    }
    else if (heroCount===1) {
        return <img src={pic2} className='background' alt="" />
    }    
    // else if (heroCount===2) {
    //     return <img src={pic1} className='background' alt="" />
    // }

}
 
export default Background;

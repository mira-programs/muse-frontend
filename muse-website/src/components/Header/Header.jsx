import './Header.css'
import { Link } from 'react-router-dom'

// import react icons................
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// import muse logo
import MuseLogo from '../../assets/muselogo.png'

export default function Header() {
  
  let prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-6.5rem"; // Adjust this value based on your header height
    }
    prevScrollpos = currentScrollPos;
  }

  return (
    <nav id="header">
        <div className="container nav-container">
            <Link className="nav-logo" to={'/'}>
                {/* <h3>Muse <span>Web</span></h3> */}
                  <img src={MuseLogo} alt="" className="moving-image"/>
            </Link>

            <ul className="nav-menu">
                <li><Link to={'/profile/id'}>Username</Link></li>
                <li><Link to={'/create'}>Create Post</Link></li>
                {/* <li><Link to={'/muser'}>Musers</Link></li> */}
                {/* <li><Link to={'/logout'}>Logout</Link></li> */}
            </ul>

            <button className="nav-toggle-button">
            <FaBars />
            <AiOutlineClose />
            </button>
        </div>
    </nav>
  )
}
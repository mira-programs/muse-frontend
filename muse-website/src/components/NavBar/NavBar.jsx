import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div id="header" className="nav">
        <div className="nav-logo">MUSE</div>
        <ul className="nav-menu">
        <li><a href="#explore">Explore</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className='nav-signup'><Link to={'/register'}>Sign Up</Link></li>
        </ul>
    </div>
  )
}

export default NavBar;

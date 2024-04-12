import './NavBar.css'

const NavBar = () => {
  return (
    <div className="nav">
        <div className="nav-logo">MUSE</div>
        <ul className="nav-menu">
            <li>Explore</li>
            <li>About</li>
            <li>Contact</li>
            <li className='nav-signup'>Sign Up</li>
        </ul>
    </div>
  )
}

export default NavBar;

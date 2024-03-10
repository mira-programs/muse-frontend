import { Link } from 'react-router-dom'

//import react icons................
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  return (
    <nav>
        <div className="container nav-container">
            <Link className="nav-logo" to={'/'}>
                <h3>Muse <span>Web</span></h3>
            </Link>

            <ul className="nav-menu">
                <li><Link to={'/profile'}>Profile</Link></li>
                <li><Link to={'/create'}>Create Post</Link></li>
                <li><Link to={'/muser'}>Musers</Link></li>
                <li><Link to={'/logout'}>Logout</Link></li>
            </ul>

            <button className="nav-toggle-button">
            <FaBars />
            <AiOutlineClose />
            </button>
        </div>
    </nav>
  )
}
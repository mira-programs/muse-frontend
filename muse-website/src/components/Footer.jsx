// router link.........
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer>
      <div className="container footer-container">\
        <ul className="footer-categories">
            <li><Link to={'/posts/categories/Paintings'}>Paintings</Link></li>
            <li><Link to={'/posts/categories/Drawings'}>Drawings</Link></li>
            <li><Link to={'/posts/categories/Photos'}>Photos</Link></li>  
            <li><Link to={'/posts/categories/Poems'}>Poems</Link></li>  
            <li><Link to={'/posts/categories/Stories'}>Stories</Link></li>
        </ul>

        <div className="footer-copyright">
            <small> &copy; Copyright All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

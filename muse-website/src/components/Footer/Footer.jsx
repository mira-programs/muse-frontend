import React, { useState, useEffect } from 'react';
import './Footer.css';
// router link.........
import { Link } from "react-router-dom"
export default function Footer() {
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const totalHeight = document.documentElement.scrollHeight;
          const windowHeight = window.innerHeight;
          const scrollPosition = scrollTop + windowHeight;

          if (scrollPosition >= totalHeight) {
              setIsVisible(true);
          } else {
              setIsVisible(false);
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <footer id="footer">
      <div className="container footer-container">
        {/* <ul className="footer-categories">
            <li><Link to={'/posts/categories/Paintings'}>Paintings</Link></li>
            <li><Link to={'/posts/categories/Drawings'}>Drawings</Link></li>
            <li><Link to={'/posts/categories/Photos'}>Photos</Link></li>  
            <li><Link to={'/posts/categories/Poems'}>Poems</Link></li>  
            <li><Link to={'/posts/categories/Stories'}>Stories</Link></li>
        </ul> */}

        <div className="footer-copyright">
            <small> &copy; Copyright All Rights Reserved</small>
        </div>
      </div>
    </footer>
  )
}

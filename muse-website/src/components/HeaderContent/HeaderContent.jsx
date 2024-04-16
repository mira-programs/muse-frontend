import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

import { useLocation } from 'react-router-dom';

function HeaderContent() {

  let prevScrollpos = window.scrollY || window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.scrollY || window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("header").style.top = "0";
    } else {
      document.getElementById("header").style.top = "-6.5rem";
    }
    prevScrollpos = currentScrollPos;
  }
  
    const location = useLocation(); 
    const isLandingPage = location.pathname === '/'; 

    let HeaderContent;
    if (isLandingPage) {
        HeaderContent = (<NavBar/>);
    }
    else {
        HeaderContent = (<Header/>);
    }

  return HeaderContent;
}

export default HeaderContent
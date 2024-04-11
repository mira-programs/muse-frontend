import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';

import { useLocation } from 'react-router-dom';

function HeaderContent() {

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
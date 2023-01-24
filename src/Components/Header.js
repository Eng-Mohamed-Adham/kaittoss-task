import '../css/style.css';
import {useState} from 'react';
import * as FaIcons from 'react-icons/fa';





const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);


    return (
        <div className='header'>
            <a href="/" className="logo">  URANOS </a>

            <nav className={sidebar ? ' navbar active' : 'navbar'}>
                <a href="#home">HOME</a>
                <a href="#about">ABOUT</a>
                <a href="#ourteam">OUR TEAM</a>
                <a href="#portfolio">PORTFOLIO</a>
                <a href="#contact">CONTACT</a>
                
            </nav>

    <div id="menu-btn" className={sidebar ?'fa-times':'fas fa-bars'} >
        <FaIcons.FaBars onClick={showSidebar} />
    </div>
        </div>
    );
}
 
export default Header;
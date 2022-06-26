
import './Navbar.css'
import Search from './Search';
import Player from './Audio';

const Navbar = ({allDinosaurs}) => {


    
    
    
    return (  

        <nav id="navbarr" >
            <div className="menu-icon">
                <span className="fas fa-bars"></span>
            </div>
            <div className="logo">
                <Player />
            </div>
            <div className="logo">
                Javasaurus
            </div>
            <div className="nav-items">
                <li><a href="/">Creators</a></li>
                <li id="fav-dino">
                    <a href="/">Favourite
                    <img id="tiny-dino" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/106/sauropod_1f995.png" alt="tiny dino" />
                    </a>
                </li>
            </div>
             <Search allDinosaurs={allDinosaurs}  />
        </nav>

    );
}
 
export default Navbar;
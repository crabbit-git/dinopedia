
import './Navbar.css'
import Search from './Search';
import Player from './Audio';
import {Link} from 'react-router-dom';

const Navbar = ({allDinosaurs}) => {

  return (  
    <nav id="navbarr">
      <div className="menu-icon"><span className="fas fa-bars"></span></div>
      <div className="logo">
        <Player />
      </div>
      <div className="logo"><Link to="/">Dinopedia</Link></div>
      <div className="nav-items">
        {/* These li elements should probably be inside a ul: */}
        {/* <ul> */}
          <li><a href="/">Creators</a></li> 
          {/* need to edit the a element tag here */}
          <li><Link to="/favourites">Favourite <img id="tiny-dino" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/106/sauropod_1f995.png" alt="tiny dino" /></Link></li>
        {/* </ul> */}
      </div>
      <Search allDinosaurs={allDinosaurs} />
    </nav>
  );
}

export default Navbar;

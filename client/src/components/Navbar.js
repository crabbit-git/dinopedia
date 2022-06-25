
import './Navbar.css'
import Search from './Search';

const Navbar = ({allDinosaurs}) => {
  return (  
    <nav>
      <div className="menu-icon"><span className="fas fa-bars"></span></div>
      <div className="logo">
        <img id="logo-pic"
          src="https://play-lh.googleusercontent.com/6gpx0U7xAp2OBnW8EswCwC_xtUiP9FaZk-z0D2dRVcJiFv-bKBN_Ui4uecMwNmaD7a4"
          alt="dino logo"
        />
      </div>
      <div className="logo">Dinopedia</div>
      <div className="nav-items">
        <ul>
          <li><a href="/">Creators</a></li>
          <li><a href="/">Favourites</a></li>
        </ul>
      </div>
      <Search allDinosaurs={allDinosaurs}  />
    </nav>
  );
}
 
export default Navbar;


import './Navbar.css'
import Search from './Search';

const Navbar = ({allDinosaurs}) => {



   
    
    return (  
        <div id="navbar-container" >
            <img id="logo" src="https://play-lh.googleusercontent.com/6gpx0U7xAp2OBnW8EswCwC_xtUiP9FaZk-z0D2dRVcJiFv-bKBN_Ui4uecMwNmaD7a4" alt="dino logo" />
            <h1>Javasaurus</h1>
            <label htmlFor="fav">
                <img id="star" src="https://thumbs.dreamstime.com/z/golden-star-christmas-decoration-clipping-path-isolated-white-background-163815373.jpg" alt="star"  />Favourites
            </label>
            <Search allDinosaurs={allDinosaurs}  />
            </div>
    );
}
 
export default Navbar;
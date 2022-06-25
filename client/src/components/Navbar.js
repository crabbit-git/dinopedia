
import './Navbar.css'
import Search from './Search';
import Player from './Audio';

const Navbar = ({allDinosaurs}) => {

    // const menuBtn = document.querySelector(".menu-icon span");
    // const searchBtn = document.querySelector(".search-icon");
    // const cancelBtn = document.querySelector(".cancel-icon");
    // const items = document.querySelector(".nav-items");
    // const form = document.querySelector("form");
    // menuBtn.onclick = ()=>{
    //   items.classList.add("active");
    //   menuBtn.classList.add("hide");
    //   searchBtn.classList.add("hide");
    //   cancelBtn.classList.add("show");
    // }
    // cancelBtn.onclick = ()=>{
    //   items.classList.remove("active");
    //   menuBtn.classList.remove("hide");
    //   searchBtn.classList.remove("hide");
    //   cancelBtn.classList.remove("show");
    //   form.classList.remove("active");
    //   cancelBtn.style.color = "#ff3d00";
    // }
    // searchBtn.onclick = ()=>{
    //   form.classList.add("active");
    //   searchBtn.classList.add("hide");
    //   cancelBtn.classList.add("show");
    // }
    const url = 'https://www.nhm.ac.uk/content/dam/nhmwww/take-part/dippy-on-tour/jurassic-soundscape.mp3'

   
    return (  

        <nav>
            <div class="menu-icon">
                <span class="fas fa-bars"></span>
            </div>
            <div className="logo">
                <Player url={url}/>
            </div>
            <div class="logo">
                Javasaurus
            </div>
            <div class="nav-items">
                <li><a href="/">Creators</a></li>
                <li><a href="/">FavouriteDinos</a></li>
            </div>
            <form action="">
             <Search allDinosaurs={allDinosaurs}  />
            </form>
        </nav>

    );
}
 
export default Navbar;
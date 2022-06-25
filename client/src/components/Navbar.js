
import './Navbar.css'
import Search from './Search';

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

   
    return (  

        <nav>
            <div class="menu-icon">
                <span class="fas fa-bars"></span>
            </div>
            <div class="logo">
                <img id="logo-pic" src="https://play-lh.googleusercontent.com/6gpx0U7xAp2OBnW8EswCwC_xtUiP9FaZk-z0D2dRVcJiFv-bKBN_Ui4uecMwNmaD7a4" alt="dino logo" />
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
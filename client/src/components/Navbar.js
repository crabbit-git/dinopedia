import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";
import './Navbar.css'
import Search from './Search';
import Player from './Audio';
import {Link} from 'react-router-dom';
import Modal from "react-modal";
import RandomFact from "./RandomFact";
import CreatorsModal from "./CreatorsModal";
import DinoAdLibs from "./DinoAdLib";

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
          <RandomFact  />
          <CreatorsModal />
          <DinoAdLibs />
          <li><Link to="/favourites">Favourite <img id="tiny-dino" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png" alt="tiny dino" /></Link></li>
        {/* </ul> */}
      </div>
      <Search allDinosaurs={allDinosaurs} />
    </nav>
    
  );
}

export default Navbar;

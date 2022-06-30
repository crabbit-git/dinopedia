import React from 'react';
import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import '../static/Navbar.css'
import '../static/LandingModal.css';
import Search from './Search';
import Player from './Audio';
import RandomFact from './RandomFact';
import CreatorsModal from './CreatorsModal';
import DinoAdLibs from './DinoAdLib';

const Navbar = ({allDinosaurs, randomFacts, creators}) => {
  let togglingPath = '/favourites';
  const CustomLink = ({ children, to, ...props }) => {
    // if (document.URL.includes('/favourites')) {
    //   togglingPath = '/';
    // }
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <>
        <Link
          style={{ background: match ? 'green' : 'none' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
        {match && ''}
      </>
    );
  }

  return (  
    <nav className='navbar'>
      <div className='logo-and-name'>
        <div className='logo'>
          <Player />
        </div>
        <div className='logo-name'>
          <Link to='/'>Dinopedia</Link>
        </div>
      </div>
      <div className='nav-items'>
        <li>
          <CustomLink to={togglingPath}>
            Favourites
          </CustomLink>
        </li>
        <RandomFact randomFacts={randomFacts} />
        <DinoAdLibs />
        <CreatorsModal creators={creators} />
      </div>
      <Search allDinosaurs={allDinosaurs} />
    </nav>
  );
}

export default Navbar;

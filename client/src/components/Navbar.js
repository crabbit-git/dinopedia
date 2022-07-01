import {Link, useMatch, useResolvedPath} from 'react-router-dom';
import '../static/Navbar.css'
import '../static/LandingModal.css';
import Search from './Search';
import DinoSounds from './DinoSounds';
import RandomFact from './RandomFact';
import CreatorsModal from './CreatorsModal';
import DinoAdLibs from './DinoAdLib';

const Navbar = ({allDinosaurs, dinoFacts, creators}) => {
  let togglingPath = '/favourites';
  const CustomLink = ({ children, to, ...props }) => {
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
          <DinoSounds />
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
        <RandomFact dinoFacts={dinoFacts} />
        <DinoAdLibs />
        <CreatorsModal creators={creators} />
      </div>
      <Search allDinosaurs={allDinosaurs} />
    </nav>
  );
}

export default Navbar;

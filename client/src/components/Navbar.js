
import styles from './Navbar.css'
import { useState, useRef, useEffect } from 'react';

const Navbar = ({allDinosaurs}) => {

    const [query, setQuery] = useState();

    const results = allDinosaurs.filter(({ name }) => query && name.toLowerCase().includes(query.toLowerCase()) );
    const hasResults = results && results.length > 0;
  
    const inputRef = useRef();
    const resultsRef = useRef();
  
    useEffect(() => {
      inputRef.current.focus();
    }, []);
  
    useEffect(() => {
      if ( hasResults ) {
        document.body.addEventListener('keydown', onKeyDown);
      } else {
        document.body.removeEventListener('keydown', onKeyDown);
      }
      return () => {
        document.body.removeEventListener('keydown', onKeyDown);
      }
    }, [hasResults]);
  
    function onKeyDown(event) {
      const isUp = event.key === 'ArrowUp';
      const isDown = event.key === 'ArrowDown';
      const inputIsFocused = document.activeElement === inputRef.current;
  
      const resultsItems = Array.from(resultsRef.current.children)
  
      const activeResultIndex = resultsItems.findIndex(child => {
        return child.querySelector('a') === document.activeElement;
      });
  
      if ( isUp ) {
        console.log('Going up!');
        if ( inputIsFocused ) {
          resultsItems[resultsItems.length - 1].querySelector('a').focus();
        } else if ( resultsItems[activeResultIndex - 1] ) {
          resultsItems[activeResultIndex - 1].querySelector('a').focus();
        } else {
          inputRef.current.focus();
        }
      }
  
      if ( isDown ) {
        console.log('Going down!')
        if ( inputIsFocused ) {
          resultsItems[0].querySelector('a').focus();
        } else if ( resultsItems[activeResultIndex + 1] ) {
          resultsItems[activeResultIndex + 1].querySelector('a').focus();
        } else {
          inputRef.current.focus();
        }
      }
    }
  /**
   * handleOnChange
   */

   function handleOnChange(event) {
    setQuery(event.currentTarget.value);
  }

   
    
    return (  
        <div id="navbar-container" >
            <img id="logo" src="https://play-lh.googleusercontent.com/6gpx0U7xAp2OBnW8EswCwC_xtUiP9FaZk-z0D2dRVcJiFv-bKBN_Ui4uecMwNmaD7a4" alt="dino logo" />
            <h1>Javasaurus</h1>
            <label htmlFor="fav">
                <img id="star" src="https://thumbs.dreamstime.com/z/golden-star-christmas-decoration-clipping-path-isolated-white-background-163815373.jpg" alt="star"  />Favourites
            </label>
            <form >
                <input type="text" />
            </form>
            <form className={styles.form} method="post" autoComplete="off">
          <input ref={inputRef} type="search" name="query" onChange={handleOnChange} />
          {hasResults && (
            <div className={styles.autocomplete}>
              <ul ref={resultsRef} className={styles.people}>
                {results.map(result => {
                  return (
                    <li key={result.url}>
                      <a href={result.url}>
                        { result.name }
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </form>
            </div>
    );
}
 
export default Navbar;
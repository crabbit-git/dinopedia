import styles from './Navbar.css'
import { useState, useRef, useEffect } from 'react';

const Search = ({allDinosaurs}) => {
    
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
     );
}
 
export default Search;
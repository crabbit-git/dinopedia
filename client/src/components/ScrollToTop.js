import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTop.css'

export const ScrollToTop= () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if(window.pageYOffset < 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false); 
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, []);

  const upArrowButton = <FontAwesomeIcon
    icon={faArrowCircleUp} className={isVisible ? 'opacity0' : 'opacity100'}
  />

  return (
    <div className='scroll-to-top-button'> 
      <button type='button' onClick={scrollToTop} className="up-arrow-button">
        {upArrowButton}
      </button>
    </div>
  );
};

export default ScrollToTop;

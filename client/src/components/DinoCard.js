import { useState } from 'react';
import '../static/DinoModal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const DinoCard = (
  {dino, cardDirection, handleAddFavDino, handleRemoveFavDino, isFavourite}
) => {
  const containerClass = `container ${cardDirection}`;
  const timelineClass = `timeline ${dino.period}`
  const mapClass = `https://dinosaurpictures.org/${dino.mapUrl}`

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const handleFavButtonClick = () => {
    if(isFavourite) {
      handleRemoveFavDino(dino._id) 
    } else {
      handleAddFavDino(dino._id)
    }
  }

const toggleStar = <FontAwesomeIcon icon={faStar}
  className={isFavourite ? 'star-class-on' : 'star-class-off'}
/>

  return (
    <div id={dino.name.toLowerCase()} className={timelineClass}>
      <div className={containerClass}>
        <div className='date'>{dino.period}</div>
        {/* TO DO: Add dino.era */}
        <i className='icon'/>
        <div className='content'>
          <img
            onClick={toggleModal}
            className='dino-image'
            src={dino.pics[2].url}
            alt={dino.name}
          />
          <h2 >{dino.name}</h2>
          <button onClick={handleFavButtonClick} className='fav-button'>
            {toggleStar}
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='modal'
        className='dino-modal-content'
      >
      <button className='dino-modal-close-button'
        onClick={toggleModal} type='button'> X 
      </button>
        <div className='dino-modal-inner'>
            <div className='dino-modal-title-div'>

            <h3 className='dino-modal-name'>{dino.name}</h3>
                <button onClick={handleFavButtonClick} className='modal-fav-button'>
              {toggleStar}
                 </button>
            </div>

          <div className='dino-modal-image-div'>
            <img className='dino-modal-image'
                src={dino.pics[2].url}
                alt={dino.name}
            />
          </div>
          <div className='dino-modal-info-div'>
              <div className='dino-modal-info'>
            
              <div>
                <b>Period:</b> {dino.period}
                <br />
                <b>Diet:</b> {dino.eats}
                <br/>
                <b>Remains found:</b> {dino.regions.join(', ')}
                <br/>
              </div>
              <img className='dino-modal-map' src={mapClass} alt='' />
              </div>
           
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default DinoCard;

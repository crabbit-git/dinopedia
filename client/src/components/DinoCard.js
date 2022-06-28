import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./DinoModal.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Modal from "react-modal";
Modal.setAppElement("#root");

const DinoCard = ({dino, cardDirection, handleAddFavDino, handleRemoveFavDino, isFavourite}) => {
  const containerClass = `container ${cardDirection}`;
  const timelineClass = `timeline ${dino.period}`
  const mapClass = `https://dinosaurpictures.org/${dino.mapUrl}`

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  
  // const isToggled =() => setIsClicked( !isFavourite)
  const handleFavButtonClick = () => {
    if(isFavourite) {
      handleRemoveFavDino(dino._id) 
    } else {
      handleAddFavDino(dino._id)
    }
  }

// const [isClicked, setIsClicked] = useState(false)
// const starOn = <FontAwesomeIcon icon ={faStar} className="star-class-on"/>
// const starOff = <FontAwesomeIcon icon ={faStar} className="star-class-off"/>
const toggleStar = <FontAwesomeIcon icon={faStar} className={isFavourite ? "star-class-on" : "star-class-off"}/>

  return (
    <div id={dino.name.toLowerCase()} className={timelineClass}>
      <div className={containerClass}>
        <div className="date">{dino.period}</div>
        <i className="icon"/>
        <div className="content">
          <img
            onClick={toggleModal}
            className="dino-image"
            src={dino.pics[2].url}
            alt={dino.name}
          />
          <h2>{dino.name}</h2>
          <button onClick={handleFavButtonClick} className="fav-button">
            {toggleStar}
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="modal"
        className="dino-modal-content"
      >
      <button className="dino-modal-close-button"
        onClick={toggleModal} type="button"> X 
      </button>
            <h3>{dino.name}</h3>
          <div className="dino-modal-image-div">
            <img className="dino-modal-image"
                src={dino.pics[2].url}
                alt={dino.name}
            />
          </div>
        <div className="dino-modal-info">
        <button onClick={handleFavButtonClick} className="fav-button">
            {toggleStar}
          </button>
            <b>Period:</b> {dino.period}
            <br />
            <b>Diet:</b> {dino.eats}
            <br/>
            <b>Found in:</b> {dino.regions.join(", ")}
            <br/>
        </div>
          <div className="dino-modal-map">
            <img src={mapClass} alt="" />
          </div>
      </Modal>
    </div>
  );
}

export default DinoCard;

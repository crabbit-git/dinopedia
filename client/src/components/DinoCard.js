import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./DinoModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const DinoCard = ({dino, cardDirection, periodClass}) => {
  const containerClass = `container ${cardDirection}`;
  const timelineClass = `timeline ${periodClass}`
  const mapClass = `https://dinosaurpictures.org/${dino.mapUrl}`

  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }





  return (

    <div id={dino.name.toLowerCase()} className={timelineClass}>
      <div className={containerClass}>
        <div className="date">{dino.period}</div>
        <i className="icon fa fa-home"/>
        <div className="content">
          <img
            onClick={toggleModal}
            className="dino-image"
            src={dino.pics[2].url}
            alt={dino.name}
          />
          <h2>{dino.name}</h2>
          <button id="fav-button">Add to favourites</button>
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

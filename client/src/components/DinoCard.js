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
    <div  id={dino.name} className={timelineClass}>
      <div onClick={toggleModal} className={containerClass}>
        <div className="date">{dino.period}</div>
        <i className="icon fa fa-home"/>
        <div className="content">
          <img 
              className="dino-image"
              src={dino.pics[0].url}
              alt={dino.name}
              width="300"
          />
          <h2>{dino.name}</h2>
          
        </div>
      </div>
      <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="modal"
        className="dino-modal-content"
        // overlayClassName="dino-modal-overlay"
        >
          <img 
              className="dino-image"
              src={dino.pics[0].url}
              alt={dino.name}
              width="300"
              />
          <button onClick={toggleModal} type="button" class="btn btn-default btn-sm">
          <span class="glyphicon glyphicon-remove"></span> X 
        </button>
        
              <h2>{dino.name}</h2>
        <p>
            <b>Diet:</b> {dino.eats}
            <br/>
            <b>Found in:</b> {dino.regions.join(", ")}
            <br/>
            <img src={mapClass} alt="" />
            
          </p>
      </Modal>
    </div>


  );
}

export default DinoCard;

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
          <div className="date" style={{color: "red"}}>{dino.period}</div>
        <i className="icon fa fa-home"/>
        <div className="content">
          {/* <div className="date">{dino.period}</div> */}
          <img 
              className="dino-image"
              src={dino.pics[2].url}
              alt={dino.name}
              
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

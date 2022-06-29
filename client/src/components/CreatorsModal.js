import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";

import Modal from "react-modal";
Modal.setAppElement("#root");

    const CreatorsModal = ({creators}) => {

     const [isOpen, setIsOpen] = useState(true);


    function toggleModal() {
        setIsOpen(!isOpen);
      }

      const creatorInfo = creators.map((creator) => {

      return (

        <div className="creator-profile" >
            <img className="creator-picture" src= {creator.picture} alt="creator name" />
            <ul className="creator-ul"> 
             <li><a href="javascript:void(1)" className="creator-name">{creator.name}</a></li>
             <li><a className="creator-links" href={creator.linkedIn}>LinkedIn</a></li>
             <li><a className="creator-links" href={creator.GitHub}>GitHub</a></li>
            </ul>

        </div> 
 
      )})

      return (
        <div>
          <li><a href="javascript:void(0)" onClick={toggleModal}>Creators</a></li>
          <Modal isOpen={!isOpen}
            onRequestClose={toggleModal}
            contentLabel="modal"
            className="landing-modal-content"
          >
            <div className="creators-container">
            <button type="button" onClick={toggleModal} className="landing-modal-close-button" >
            &times;
            </button>
            <h3 className="creator-title">This is team Dinomite</h3>
              <div className="creator-div">
                {creatorInfo}
              <button type="button" onClick={toggleModal}  className="creator-modal-button">
              Return to Dinopedia
              </button>
              </div>
            </div>
            </Modal>
        </div>
      );
}

export default CreatorsModal;
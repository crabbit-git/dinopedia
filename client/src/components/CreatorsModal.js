import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const CreatorsModal = ({toggleModal}) => {
     [isOpen, setIsOpen] = useState(true);


    function toggleModal() {
        setIsOpen(!isOpen);
      }

    const creator = () => {
    


        function toggleModal() {
          setIsOpen(!isOpen);
        }
      
      
        return (
          <div>
            <i className="icon fa fa-home"/>
            <div className="content">
            </div>
          <Modal isOpen={isOpen}
              onRequestClose={toggleModal}
              contentLabel="modal"
              className="dino-modal-content"
            >
              <h3>Creators</h3>
            <button type="button" onClick={toggleModal} className="dino-modal-close-button" >
            &times;
            </button>
            <br />
            <button type="button" onClick={toggleModal}  className="dino-modal-button" >
          back to Dinopedia
            </button>
      
            
           
            </Modal>
            </div>
        );


    }
  const [isOpen, setIsOpen] = useState(true);


  function toggleModal() {
    setIsOpen(!isOpen);
  }


return (
    {creator}
)
}

export default CreatorsModal;
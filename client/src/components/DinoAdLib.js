import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const DinoAdLibs = () => {
  
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
 
  
    function toggleModal1() {
        setIsOpen(!isOpen);
      }
    function toggleModal2() {
        setIsOpen2(!isOpen2);
    }

    function handleSubmit() {
        setIsOpen2(!isOpen2);
        // setIsOpen(!isOpen); 
    }

    function handleCloseAll() {
        setIsOpen2(!isOpen2);
        setIsOpen(!isOpen); 
    }

  
  return (
    <div>
      <i className="icon fa fa-home"/>
      <div className="content">
      </div>
      <li><a href="javascript:void(0)" onClick={toggleModal1} >Dino AdLib</a></li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal1}
        contentLabel="modal"
        className="dino-modal-content"
      >
        <h3>Dino AdLibs From</h3>
     <button type="button" onClick={toggleModal1} className="dino-modal-close-button" >
      &times;
      </button>
      <br />
      <button type="submit" onClick={handleSubmit} className="dino-modal-button" >
    Give me another!
      </button>
      <Modal isOpen={!isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="modal"
        className="dino-modal-content"
      >
        <h3>Dino AdLibs Final</h3>
     <button type="button" onClick={handleCloseAll} className="dino-modal-close-button" >
      &times;
      </button>
      <br />
      <button type="button" onClick={handleCloseAll} className="dino-modal-button" >
    Give me another!
      </button>

      () => {
        
      }
     
      </Modal>

      
     
      </Modal>
      </div>
  );
}

export default DinoAdLibs;
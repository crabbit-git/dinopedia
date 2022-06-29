import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const RandomFact = ({randomFacts}) => {
  
    function toggleModal() {
        setIsOpen(!isOpen);
      }

    const commentList = randomFacts.map((fact) => fact.comment)
  
    const randomFact = commentList[Math.floor(Math.random()*commentList.length)];
    const randomFact2 = commentList[Math.floor(Math.random()*commentList.length)];
  
    const [isOpen, setIsOpen] = useState(true);
    const [rndmFact, setrndmFact] = useState(randomFact2);
  
    const toggleRdmnFact = () => {
      setrndmFact(randomFact)
    //   if (rndmFact === "") {
    //     setrndmFact(randomFact2)
    //     return rndmFact
      if (rndmFact ==! randomFact) {
        setrndmFact(randomFact)
        return rndmFact
      } else if (rndmFact ==! randomFact2) {
        setrndmFact(randomFact)
        return rndmFact
      } else if (rndmFact === randomFact) {
        setrndmFact(randomFact2)
        return rndmFact
      } else if (rndmFact === randomFact2) {
        setrndmFact(randomFact)
        return rndmFact
      }
    }
    
    
    // javascript:void(0)" onClick= {toggleModal}

  return (
    <div>
      <i className="icon fa fa-home"/>
      <div className="content">
      </div>
      <li><a href="javascript:void(0)" onClick={toggleModal} >Did you know?</a></li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal}
        contentLabel="modal"
        className="landing-modal-content"
      >
        <button type="button" onClick={toggleModal} className="landing-modal-close-button" >
      &times;
      </button>
        <h3>Random Fact</h3>
        <p>{rndmFact}</p>
      <br />
      <button type="button" onClick={toggleRdmnFact}  className="landing-modal-button" >
    Give me another!
      </button>

      
     
      </Modal>
      </div>
  );
}

export default RandomFact;

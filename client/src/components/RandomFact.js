import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/LandingModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RandomFact = ({randomFacts}) => {
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const factsText = randomFacts.map(fact => fact.comment)

  const randomFact = () => factsText[
    Math.floor(
      Math.random() * factsText.length
    )
  ];

  const [isOpen, setIsOpen] = useState(true);
  const [fact, setFact] = useState(randomFact);

  const changeFact = () => {
    setFact(randomFact);
    return fact
  }

  const firstFact = () => {
    toggleModal();
    changeFact();
  }

  return (
    <div>
      <li>
        <NavLink to='#' onClick={firstFact}>
          Did you know...?
        </NavLink>
      </li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal}
        contentLabel='modal'
        className='landing-modal-content'
      >
        <button type='button'
        onClick={toggleModal}
        className='landing-modal-close-button'
        >
          &times;
        </button>
        <h3>Did you know...?</h3>
        <p>{fact}</p>
        <br />
        <button type='button'
          onClick={changeFact} className='landing-modal-button'
        >
          Give me another!
        </button>
      </Modal>
    </div>
  );
}

export default RandomFact;

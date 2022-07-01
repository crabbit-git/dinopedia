import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/LandingModal.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const RandomFact = ({dinoFacts}) => {
  
  const [isOpen, setIsOpen] = useState(true);
  
  const toggleModal = () => {
    setIsOpen(!isOpen);
  }

  const facts = dinoFacts.map(fact => fact.body)

  const randomFact = () => facts[
    Math.floor(
      Math.random() * facts.length
    )
  ];

  const [fact, setFact] = useState(randomFact);

  const changeFact = () => {
    let anotherFact = randomFact();
    while (fact === anotherFact) {
      anotherFact = randomFact();
    }
    setFact(anotherFact);
    return fact;
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

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../static/LandingModal.css';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const CreatorsModal = ({creators}) => {

  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => setIsOpen(!isOpen);

  const creatorInfo = creators.map(creator => (
    <div className='creator-profile' key={creator._id}>
      <img
        className='creator-picture' src={creator.picture} alt='creator name'
      />
      <ul className='creator-ul'> 
        <li>
          <h3 className='creator-name'>
            {creator.name}
          </h3>
        </li>
        <li>
          <a className='creator-links' href={creator.linkedIn}>
            LinkedIn
          </a>
        </li>
        <li>
          <a className='creator-links' href={creator.GitHub}>
            GitHub
          </a>
        </li>
      </ul>
    </div> 
  ));

  return (
    <div>
      <li>
        <NavLink to='#' onClick={toggleModal}>
          Creators
        </NavLink>
      </li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal}
        contentLabel='modal'
        className='landing-modal-content'
      >
        <div className='creators-container'>
          <button
            type='button' onClick={toggleModal}
            className='landing-modal-close-button'
          >
            &times;
          </button>
          <h3 className='creator-title'>Meet Team Dinomite!</h3>
            <div className='creator-div'>
              {creatorInfo}
              <button
                type='button' onClick={toggleModal}
                className='creator-modal-button'
              >
                Return to Dinopedia
              </button>
            </div>
        </div>
      </Modal>
    </div>
  );
}

export default CreatorsModal;

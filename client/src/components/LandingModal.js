import React, { useState } from 'react';
import { Styles } from 'react-modal';
import '../static/LandingModal.css';

import Modal from 'react-modal';
Modal.setAppElement('#root');

const LandingModal = () => {
  
  const [isOpen, setIsOpen] = useState(true);


  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <i className='icon fa fa-home'/>
      <div className='content'>
      </div>
    <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='modal'
        className='landing-modal-content'
      >
        <div className='landing-modal-div'>

      <button type='button' onClick={toggleModal} className='landing-modal-close-button' >
      &times;
      </button>
      <h3>Welcome to our WD_23 group project </h3>
      <img className='landing-modal-image' src='https://codeclan.com/wp-content/uploads/2019/04/CodeClan-Logo-White-2019-01.png'/>
      <br />
      <button type='button' onClick={toggleModal}  className='landing-modal-button' >
    ENTER
      </button>
        </div>
      </Modal>
      </div>
  );
}

export default LandingModal;


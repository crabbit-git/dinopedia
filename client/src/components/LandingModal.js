import { useState } from 'react';
import '../static/NavModals.css';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const LandingModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel='modal'
        className='landing-modal-content'
      >
        <div className='landing-modal-div'>
          <button
            type='button'
            onClick={toggleModal}
            className='landing-modal-close-button'
          >
            &times;
          </button>
          <h3>Welcome to Dinopedia!</h3>
          <p>Brought to you by Team Dinomite of CodeClan cohort WD23</p>
          <img
            className='landing-modal-image'
            src='https://codeclan.com/wp-content/uploads/2019/04/CodeClan-Logo-White-2019-01.png'
          />
          <br />
          <button
            type='button'
            onClick={toggleModal} 
            className='landing-modal-button'
          >
            ENTER
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default LandingModal;

import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";

import Modal from "react-modal";
Modal.setAppElement("#root");

    const CreatorsModal = () => {

     const [isOpen, setIsOpen] = useState(true);


    function toggleModal() {
        setIsOpen(!isOpen);
      }
      
    const creator1 = {name: "Colette", picture: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png", linkedIn: "/", GitHub: "/"}
    const creator2 = {name: "Sean", picture: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png", linkedIn: "/", GitHub: "/"}
    const creator3 = {name: "Xander", picture: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png", linkedIn: "/", GitHub: "/"}
    const creator4 = {name: "Heather", picture: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png", linkedIn: "/", GitHub: "/"}
    const creatorList = [creator1, creator2, creator3, creator4]

    const creatorProfile = creatorList.map((creator) => {
        return ( 
            <div className="creator-profile" >
                <img className="creator-picture" src= {creator.picture} alt="creator name" />
                <p className="creator-name">{creator.name}</p>
                <ul>
                    <li><a className="creator-links" href={creator.linkedIn}>LinkedIn</a></li>
                    <li><a className="creator-links" href={creator.GitHub}>GitHub</a></li>
                </ul>
            </div> 
         );
    })

      return (
        <div>
          <i className="icon fa fa-home"/>
          <div className="content">
          </div>
          <li><a href="javascript:void(0)" onClick={toggleModal}>Creators</a></li>
        <Modal isOpen={!isOpen}
            onRequestClose={toggleModal}
            contentLabel="modal"
            className="landing-modal-content"
          >
            <h3>This is team Dinomite</h3>
            <div className="creator-div" >
               {creatorProfile}
            </div>
          <button type="button" onClick={toggleModal} className="landing-modal-close-button" >
          &times;
          </button>
          <br />
          <button type="button" onClick={toggleModal}  className="landing-modal-button" >
        back to Dinopedia
          </button>
    
          
         
          </Modal>
          </div>
      );
}

export default CreatorsModal;
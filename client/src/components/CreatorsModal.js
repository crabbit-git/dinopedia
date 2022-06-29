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

    const creator1 = {name: "Colette Dufficy", picture: "https://avatars.githubusercontent.com/u/90625181?v=4", linkedIn: "https://www.linkedin.com/in/colettedufficy/", GitHub: "https://github.com/ColetteDufficy"}
    const creator2 = {name: "Sean Johnson", picture: "https://avatars.githubusercontent.com/u/98856218?v=4", linkedIn: "https://www.linkedin.com/in/communicasean/", GitHub: "https://github.com/sjohns2020"}
    const creator3 = {name: "Xander Mackenzie", picture: "https://avatars.githubusercontent.com/u/98990717?v=4", linkedIn: "https://www.linkedin.com/in/xandermackenzie/", GitHub: "https://github.com/crabbit-git"}
    const creator4 = {name: "Heather Lamont", picture: "https://avatars.githubusercontent.com/u/98851496?v=4", linkedIn: "https://www.linkedin.com/in/heather-lamont-05aa3b46/", GitHub: "https://github.com/HeatherLamont"}
    const creatorList = [creator1, creator2, creator3, creator4]

    const creatorProfile = creatorList.map((creator) => {
        return ( 
            <div className="creator-profile" >
                <img className="creator-picture" src= {creator.picture} alt="creator name" />
                <ul className="creator-ul"> 
                <li><a href="javascript:void(1)" className="creator-links1">{creator.name}</a></li>
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
          
          <button type="button" onClick={toggleModal}  className="landing-modal-button">
        Return to Dinopedia
          </button>
          <p><br /></p>
    
          
         
          </Modal>
          </div>
      );
}

export default CreatorsModal;
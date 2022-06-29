import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const LandingModal = () => {
  
  const [isOpen, setIsOpen] = useState(true);


  function toggleModal() {
    setIsOpen(!isOpen);
  }

//   const listOfRandomFacts= [
//     "Dinosaurs are a group of reptiles that have lived on Earth for about 245 million years.", 
//     "In 1842, the English naturalist Sir Richard Owen coined the term Dinosauria, derived from the Greek deinos, meaning “fearfully great,” and sauros, meaning “lizard.”",
//     "Dinosaur fossils have been found on all seven continents.",
//     "All non-avian dinosaurs went extinct about 66 million years ago.",
//     "There are roughly 700 known species of extinct dinosaurs.",
//     "Modern birds are a kind of dinosaur because they share a common ancestor with non-avian dinosaurs.",
//     "Paleontologists use fossil evidence preserved in ancient rock to discover how long-extinct animals lived and behaved. ",
//     "In most cases, a fossilized bone is actually a rock made out of minerals, with no trace of the original bone material.",
//     "The discovery of dinosaur eggs and nests provided evidence for the behavior of some dinosaurs.",
//     "By comparing the skulls of Protoceratops of different ages (like in the image above), paleontologists can draw conclusions about how some dinosaurs grew.",
//     "To discover how organisms lived in the past, paleontologists look for clues preserved in ancient rocks—the fossilized bones, teeth, eggs, footprints, teeth marks, leaves, and even dung of ancient organisms.",
//     "Fossilized jaws, teeth, and dung provide important clues about what non-avian dinosaurs ate.",
//     "Series of fossilized footprints, called trackways, reveal some intriguing evidence about dinosaur behavior and locomotion.",
//     "Until recently it was believed that feathers were unique to birds. Recent discoveries, however, have unearthed evidence for feathered non-avian dinosaurs."
//   ]

//   const randomFact = listOfRandomFacts[Math.floor(Math.random()*listOfRandomFacts.length)];
//   <h3>Random Fact</h3>
//   <p>{randomFact}</p>

  return (
    <div>
      <i className="icon fa fa-home"/>
      <div className="content">
      </div>
    <Modal isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="modal"
        className="landing-modal-content"
      >
        <br />
      <h3 className= "landing-h3" >Dinopedia</h3>
      <p>Learn about your favourite dinosaurs, Select your favourite ones and learn about why they no longer roam the Earth.
       </p>
   
      <img className="landing-modal-image" src="https://codeclan.com/wp-content/uploads/2019/04/CodeClan-Logo-White-2019-01.png"/>
      <button type="button" onClick={toggleModal} className="landing-modal-close-button" >
      &times;
      </button>
      <br />
      <button type="button" onClick={toggleModal}  className="landing-modal-button" >
    ENTER
      </button>

      
     
      </Modal>
      </div>
  );
}

export default LandingModal;


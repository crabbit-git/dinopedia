import React, { useState } from "react";
import { Styles } from "react-modal";
import styles from "./LandingModal.css";


import Modal from "react-modal";
Modal.setAppElement("#root");

const DinoAdLibs = () => {
  
    const [isOpen, setIsOpen] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [dinoName, setDinoName] = useState('')
    const [verb, setVerb] = useState('')
    const [noun, setNoun] = useState('')
    const [noun2, setNoun2] = useState('')
    const [Adjective, setAdjective] = useState('')
  
  
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


    const handleDinoNameChange = (event) => {
        setDinoName(event.target.value)
    }

    const handleVerbChange = (event) => {
        setVerb(event.target.value)
    }
    const handleNounChange = (event) => {
        setNoun(event.target.value)
    }
    const handleNoun2Change = (event) => {
        setNoun2(event.target.value)
    }
    const handleAdjectiveChange = (event) => {
        setAdjective(event.target.value)
    }


   function handleFormSubmit(event) {
    event.preventDefault()
    if (noun === "" ||  verb  === "" ||   noun  === "" ||  noun2    === "" || Adjective === "") {
        alert("Please complete all fields");
        handleCloseAll()
        return false;
    }}

    const here =  <a href="https://www.nationalgeographic.com/science/article/dinosaur-killing-asteroid-most-likely-struck-in-spring#:~:text=The%20impact%20that%20ended%20the,75%20percent%20of%20Earth's%20species.">here.</a>

  
  return (
    <div>
      <i className="icon fa fa-home"/>
      <div className="content">
      </div>
      <li><a href="javascript:void(0)" onClick={toggleModal1} >AdLib</a></li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal1}
        contentLabel="modal"
        className="dino-modal-content"
      >
        <h3>Dino AdLibs From</h3>
        <form onSubmit={handleFormSubmit} className="adlib-form">
    
      <label htmlFor="dinoName">dinoName:</label>
      <input type="text" id="dinoName" name="dinoName" value={dinoName} onChange={handleDinoNameChange} />

      <label htmlFor="verb">A Verb or doing word:</label>
      <input type="text" id="verb" name="verb" value={verb} onChange={handleVerbChange} />

      <label htmlFor="noun">A noun or naming word:</label>
      <input type="text" id="noun" name="noun" value={noun} onChange={handleNounChange} />

      <label htmlFor="noun2">Another noun or naming word:</label>
      <input type="text" id="noun2" name="noun2" value={noun2} onChange={handleNoun2Change} />

      <label htmlFor="Adjective">An Adjective or describing word:</label>
      <input type="text" id="Adjective" name="Adjective" value={Adjective} onChange={handleAdjectiveChange} />

        <button type="submit" onClick={handleSubmit} className="dino-modal-button" >
        Submit Answers
        </button>
        </form>

      <br />
      <button type="button" onClick={toggleModal1} className="dino-modal-close-button" >
      &times;
      </button>
      <Modal isOpen={!isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="modal"
        className="dino-modal-content"
      >
        <h3>Dino AdLibs Final</h3>
        <p>There once was a dinosaur called {dinoName} who lived in the triassic period and mainly ate
        {noun}.  {dinoName} was wiped out with the rest of the dinosaurs by a 
        {Adjective} {noun2} which struck Earth. The impact that ended the age of dinosaurs some 66 million 
        years ago was the worst single day that life on Earth has ever endured. A six-mile-wide 
        {noun2} called Chicxulub slammed into the waters off what is now Mexico, triggering a 
        {Adjective} extinction that killed off more than 75 percent of Earth's species. No wait that is
         not right??? If you really want ot know what happened to {dinoName} click {here} </p>
     <button type="button"  onClick={handleCloseAll} className="dino-modal-close-button" >
      &times;
      </button>
      <br />
      <button type="button" onClick={handleCloseAll}  className="dino-modal-button" >
        back to Dinopedia
          </button>
     
      </Modal>

      
     
      </Modal>
      </div>
  );
}

export default DinoAdLibs;
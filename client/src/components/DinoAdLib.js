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
        toggleModal2()
        return false

        
    } else return true
  }

    const here =  <a className="adlib-atag" href="https://www.nationalgeographic.com/science/article/dinosaur-killing-asteroid-most-likely-struck-in-spring#:~:text=The%20impact%20that%20ended%20the,75%20percent%20of%20Earth's%20species.">here.</a>

  
  return (
    <div>
      <i className="icon fa fa-home"/>
      <div className="content">
      </div>
      <li><a href="javascript:void(0)" onClick={toggleModal1} >Story Time</a></li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal1}
        contentLabel="modal"
        className="landing-modal-content"
      >
        <button type="button" onClick={toggleModal1} className="landing-modal-close-button" >
      &times;
      </button>
        <h3>Discover why dinosaurs are extinct and practice your grammar</h3>
        <form onSubmit={handleFormSubmit} className="adlib-form">

      <label  className="adlib-input" htmlFor="dinoName">Enter a 'Noun' or naming word:</label>
      <input type="text" id="dinoName" name="dinoName" className="adlib-input-box" value={dinoName} onChange={handleDinoNameChange} />

      <label className="adlib-input" htmlFor="verb">Enter a 'Verb' or doing word:</label>
      <input type="text" id="verb" name="verb" className="adlib-input-box" value={verb} onChange={handleVerbChange} />

      <label className="adlib-input" htmlFor="noun">Enter a 'Noun' or naming word:</label>
      <input type="text" id="noun" name="noun"className="adlib-input-box" value={noun} onChange={handleNounChange} />

      <label className="adlib-input" htmlFor="noun2">Enter another 'noun' or naming word:</label>
      <input type="text" id="noun2" name="noun2" className="adlib-input-box"value={noun2} onChange={handleNoun2Change} />

      <label className="adlib-input" htmlFor="Adjective">Enter an 'Adjective' or describing word:</label>
      <input type="text" id="Adjective" name="Adjective" className="adlib-input-box1"value={Adjective} onChange={handleAdjectiveChange} />

        <button type="submit" onClick={handleSubmit} className="landing-modal-button1" >
        Submit Answers
        </button>
        </form>

      <br />

      <br />
      <button type="button" onClick={toggleModal1}  className="landing-modal-button" >
        Return to Dinopedia
          </button>
          
          <p><br /><br /></p>

      <Modal isOpen={!isOpen2}
        onRequestClose={toggleModal2}
        contentLabel="modal"
        className="landing-modal-content"
      >
          <button type="button"  onClick={handleCloseAll} className="landing-modal-close-button" >
      &times;
      </button>
        <h3>Dino AdLibs Final</h3>
        <p className="adlib-return" >There once was a dinosaur called <span > {dinoName} </span> who lived in the triassic period and mainly ate
        <span className="adlib-css"> {noun} </span> .  
        <br /> <br /><span className="adlib-css"> {dinoName}  </span> was wiped out with the rest of the dinosaurs by a 
        <span className="adlib-css"> {Adjective} </span> <span className="adlib-css"> {noun2}  </span> which struck Earth. <br /> <br /> The impact that ended the age of dinosaurs some 66 million 
        years ago was the worst single day that life on Earth has ever endured. <br /> <br /> A six-mile-wide 
        <span className="adlib-css"> {noun2}  </span> called Chicxulub slammed into the waters off what is now Mexico, triggering a 
        <span className="adlib-css"> {Adjective}  </span> extinction that killed off more than 75 percent of Earth's species. <br />  br
        No wait that is
         not right??? If you really want ot know what happened to <span className="adlib-css"> {dinoName} </span>  then just click <span className="adlib-css"> {here}  </span> </p>
     <button type="button"  onClick={handleCloseAll} className="landing-modal-close-button" >
      &times;
      </button>
      <br />
      <button type="button" onClick={handleCloseAll}  className="landing-modal-button" >
        Return to Dinopedia
          </button>
          <p><br /><br /></p>
     
      </Modal>

      
     
      </Modal>
      </div>
  );
}

export default DinoAdLibs;
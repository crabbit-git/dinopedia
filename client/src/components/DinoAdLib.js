import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const DinoAdLibs = () => {

  const [isOpen, setIsOpen] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [noun0, setNoun0] = useState('') 
  const [verb, setVerb] = useState('')
  const [noun1, setNoun1] = useState('')
  const [noun2, setNoun2] = useState('')
  const [adjective, setAdjective] = useState('')

  const toggleModal1 = () => {
    setIsOpen(!isOpen);
  }
  const toggleModal2 = () => {
    setIsOpen2(!isOpen2);
  }
  const handleSubmit = () => {
    setIsOpen2(!isOpen2);
  }
  const handleCloseAll = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(!isOpen); 
  }

  const handleNoun0Change = event => {
      setNoun0(event.target.value)
  }
  const handleVerbChange = event => {
      setVerb(event.target.value)
  }
  const handleNoun1Change = event => {
      setNoun1(event.target.value)
  }
  const handleNoun2Change = event => {
      setNoun2(event.target.value)
  }
  const handleAdjectiveChange = event => {
      setAdjective(event.target.value)
  }
  const handleFormSubmit = event => {
    event.preventDefault();
    if (
      noun0 === "" ||
      noun1 === "" ||
      noun2 === "" ||
      verb  === "" ||
      adjective === ""
    ) {
      alert("Please complete all fields");
      toggleModal2();
      return false;
    }
    return true;
  }

  const natGeoLink = <a
      className="adlib-atag"
      href="https://www.nationalgeographic.com/science/article/dinosaur-killing-asteroid-most-likely-struck-in-spring#:~:text=The%20impact%20that%20ended%20the,75%20percent%20of%20Earth's%20species."
    >here</a>

  return (
    <div>
      <li>
        <a href="javascript:void(0)" onClick={toggleModal1}>Story Time</a>
      </li>
      <Modal isOpen={!isOpen}
        onRequestClose={toggleModal1}
        contentLabel="modal"
        className="landing-modal-content"
      >
      <div className="adlib-form-div">
        <button
          type="button" onClick={toggleModal1}
          className="landing-modal-close-button"
        >
        &times;
        </button>
        <h3 className="adlib-form-title">
          Learn about why dinosaurs are extinct...<br/>
          and practice your grammar!
        </h3>
        <form onSubmit={handleFormSubmit} className="adlib-form">
        <label className="adlib-input" htmlFor="noun1">
            Enter a noun ("naming" word):
          </label>
          <input
            type="text" id="noun1" name="noun1"
            className="adlib-input-box"
            value={noun1} onChange={handleNoun1Change}
          />
          <label className="adlib-input" htmlFor="noun2">
            Enter another noun:
          </label>
          <input
          type="text" id="noun2" name="noun2" className="adlib-input-box"
          value={noun2} onChange={handleNoun2Change}
          />
          <label className="adlib-input" htmlFor="noun0">
            Enter a proper noun ("naming" word starting with a capital letter):
          </label>
          <input
            type="text" id="noun0" name="noun0"
            className="adlib-input-box"
            value={noun0} onChange={handleNoun0Change}
          />
          <label className="adlib-input" htmlFor="verb">
            Enter a verb ("doing" word):
          </label>
          <input
            type="text" id="verb" name="verb"
            className="adlib-input-box"
            value={verb} onChange={handleVerbChange}
          />
          <label className="adlib-input" htmlFor="adjective">
            Enter an adjective ("describing" word):
          </label>
          <input
            type="text" id="adjective" name="adjective"
            className="adlib-input-box1"
            value={adjective} onChange={handleAdjectiveChange}
          />
          <button
            type="submit" onClick={handleSubmit}
            className="adlib-modal-button"
          >
            Submit Answers
          </button>
        </form>
        
        <button type="button" onClick={toggleModal1}
        className="adlib-modal-button">
          Return to Dinopedia
        </button>
      </div>
        
        <Modal isOpen={!isOpen2}
          onRequestClose={toggleModal2}
          contentLabel="modal"
          className="landing-modal-content"
        >
          <button
            type="button" onClick={handleCloseAll}
            className="landing-modal-close-button"
          >
          &times;
          </button>
          <div className="adlib-return-div">
            <h3 className="adlib-return-title">A long time ago...</h3>
           <p className="adlib-return">
            There once was a dinosaur called
            <span className="adlib-css"> {noun0} </span>
            who lived in the cretaceous era and loved to
            <span className="adlib-css"> {verb}</span>
            <span className="adlib-css"> {noun1}</span>.
            <br /><br />
            Unfortunately, about 66 million years ago,
            <span className="adlib-css"> {noun0} </span>
            was wiped out with the rest of the dinosaurs by a
            <span className="adlib-css"> {adjective}</span>
            <span className="adlib-css"> {noun2} </span>
            which struck Earth, causing a
            <span className="adlib-css"> {adjective} </span>
            extinction event which ended the
            cretaceous era and the mesozoic era as a whole (the mesozoic era was
            made up of the triassic, jurassic, and cretaceous eras).
            <br /> <br />
            The mesozoic extinction event was the worst single day that life on
            Earth has ever endured. 
            A six-mile-wide
            <span className="adlib-css"> {noun2} </span>
            called Chicxulub slammed into the waters off an area we now know as
            Mexico, triggering a
            <span className="adlib-css"> {adjective} </span>
            extinction that killed off more than 75 percent of Earth's species.
            <br /><br />
            Wait a minute... that's not quite right, is it?
            <br /><br />
            If you want to know what really happened to
            <span className="adlib-css"> {noun0}</span>, click
            <span className="adlib-css"> {natGeoLink}</span>!
           </p>
            <br/>
            <button
            type="button"
            onClick={handleCloseAll}
            className="adlib-modal-button"
            >
            Return to Dinopedia
            </button>

          </div>
        
        </Modal>
      </Modal>
    </div>
  );
}

export default DinoAdLibs;

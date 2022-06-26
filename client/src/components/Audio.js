
//in dino timeline   
// const url = 'https://www.nhm.ac.uk/content/dam/nhmwww/take-part/dippy-on-tour/jurassic-soundscape.mp3'
// <Player url={url}/>

//In seperate component
import React, { useState, useEffect } from "react";


const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);



  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio('https://www.nhm.ac.uk/content/dam/nhmwww/take-part/dippy-on-tour/jurassic-soundscape.mp3');
 

  return (

      <div>
        <img onClick={toggle} id="logo-pic" src="https://play-lh.googleusercontent.com/6gpx0U7xAp2OBnW8EswCwC_xtUiP9FaZk-z0D2dRVcJiFv-bKBN_Ui4uecMwNmaD7a4" alt="dino logo"/> 
        {playing}
      </div>
  
      );
    };


export default Player;
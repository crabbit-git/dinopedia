import { useState, useEffect } from 'react';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [playing, toggle];
};

const DinoSounds = () => {
  const [playing, toggle] = useAudio(
    'https://www.nhm.ac.uk/content/dam/nhmwww/take-part/dippy-on-tour/jurassic-soundscape.mp3'
  );

  return (
    <div>
      <img
        onClick={toggle} id='logo-pic'
        src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/twitter/322/sauropod_1f995.png'
        alt='dino logo'
      /> 
      {playing}
    </div>
  );
}

export default DinoSounds;

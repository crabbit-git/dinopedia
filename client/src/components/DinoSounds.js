import { useState, useEffect } from 'react';
import logo from '../static/assets/sauropod_1f995.png';
import soundscape from '../static/assets/jurassic-soundscape.mp3';

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
    soundscape
  );

  return (
    <div>
      <img
        onClick={toggle} id='logo-pic'
        src={logo}
        alt='dino logo'
      /> 
      {playing}
    </div>
  );
}

export default DinoSounds;

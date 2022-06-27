import {useEffect, useState} from 'react';
import './App.css';
import DinoTimeline from './components/DinoTimeline';
import Navbar from './components/Navbar';
import LandingModal from './components/LandingModal';


function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/dinosaurs/')
    .then(res => res.json())
    .then(data => setAllDinosaurs(data))
  }, [])

  return (
    <div>
      <LandingModal />
      <Navbar allDinosaurs={allDinosaurs}/>
      <h1>Butts</h1>
      <DinoTimeline allDinosaurs={allDinosaurs}/>
    </div>
  );
}

export default App;



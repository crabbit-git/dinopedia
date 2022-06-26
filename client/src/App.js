import {useEffect, useState} from 'react';
import './App.css';
import DinoTimeline from './components/DinoTimeline';
import Navbar from './components/Navbar';

function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/dinosaurs/')
    .then(res => res.json())
    .then(data => setAllDinosaurs(data))
  }, [])

  return (
    <div>
      <Navbar allDinosaurs={allDinosaurs}/>
      <DinoTimeline allDinosaurs={allDinosaurs}/>
    </div>
  );
}

export default App;

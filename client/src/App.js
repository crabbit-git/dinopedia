import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DinoTimeline from './components/DinoTimeline';
import Navbar from './components/Navbar';


function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);
  // const [favDinosaurs, setFavDinosaurs] = useState([]);


  // [...favDinosaurs]

  useEffect(() => {
    fetch('http://localhost:5000/api/dinosaurs/')
    .then(res => res.json())
    .then(data => setAllDinosaurs(data))
  }, [])

  return (
    <BrowserRouter>
      <Navbar allDinosaurs={allDinosaurs}/>
      <h1>Butts</h1>
      <Routes>
        <Route path="/" element={<DinoTimeline allDinosaurs={allDinosaurs}/>}/>
        <Route path="/favourites" element={<DinoTimeline/>}/>
      </Routes>
      {/* <DinoTimeline allDinosaurs={allDinosaurs}/> */}
    </BrowserRouter>
   
  );
}

export default App;

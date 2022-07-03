import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './static/App.css';
import LandingModal from './components/LandingModal';
import Navbar from './components/Navbar';
import DinoTimeline from './components/DinoTimeline';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [allDinosaurs, setAllDinosaurs] = useState([]);
  const [hasLoadedAllDinosaurs, setHasLoadedAllDinosaurs] = useState(false);
  const [favDinosaurs, setFavDinosaurs] = useState([]);
  const [dinoFacts, setDinoFacts] = useState([])
  const [creators, setCreators] = useState([])
  const savedFavs = window.localStorage.getItem('favDinoNames');

  // Load in dinosaurs from database at startup
  useEffect(() => {
    fetch('http://localhost:5000/api/dinosaurs/')
    .then(res => res.json())
    .then(data => {
      setAllDinosaurs(data);
      setHasLoadedAllDinosaurs(true);
    });
    console.log(
      `User has saved the following dinosaurs as favourites: ${savedFavs}`
    );
    console.log(`Loaded URL ${document.URL}`);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Load in random dinosaur facts from database at startup
  useEffect(() => {
    fetch('http://localhost:5000/api/facts/')
    .then(res => res.json())
    .then(data => {
      setDinoFacts(data);
    });
  }, []);

  // Load in Team Dinomite data from database at startup
  useEffect(() => {
    fetch('http://localhost:5000/api/creators/')
    .then(res => res.json())
    .then(data => {
      setCreators(data);
    });
  }, []);

  // When dinosaur list is populated, check for saved favourites in localStorage
  // and if they exist, pull them into the application's favourites list:
  useEffect(() => {
    if (savedFavs) {
      setFavDinosaurs(
        allDinosaurs.filter(dino => savedFavs.includes(dino.name))
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDinosaurs]);

  // If list of favourite dinosaurs (JSON) changes state, write all of its
  // dinosaur names to localStorage:
  useEffect(() => {
    if (hasLoadedAllDinosaurs === true) {
      window.localStorage.setItem(
        'favDinoNames',
        JSON.stringify(favDinosaurs.map(dino => dino.name))
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favDinosaurs]);

  const handleAddFavDino = dinoId => {
    const foundFavDino = allDinosaurs.find(
      dinosaur => dinosaur._id === dinoId
    );
    setFavDinosaurs([...favDinosaurs, foundFavDino]);
  }

  const handleRemoveFavDino = dinoId => {
    const filteredFavDinos = favDinosaurs.filter(
      favDinosaur => favDinosaur._id !== dinoId
    );
    setFavDinosaurs(filteredFavDinos);
  }

  return (
    <BrowserRouter>
      <LandingModal />
      <Navbar
        allDinosaurs={allDinosaurs}
        creators={creators}
        dinoFacts={dinoFacts}
      />
      <ScrollToTop/>
      <Routes>
        <Route
          path='/'
          element={
            <DinoTimeline
              allDinosaurs={allDinosaurs}
              handleAddFavDino={handleAddFavDino}
              handleRemoveFavDino={handleRemoveFavDino}
              favDinosaurs={favDinosaurs}
            />
          }
        />
        <Route
          path='/favourites'
          element={
            <DinoTimeline
              allDinosaurs={favDinosaurs}
              handleAddFavDino={handleAddFavDino}
              handleRemoveFavDino={handleRemoveFavDino}
              favDinosaurs={favDinosaurs}
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

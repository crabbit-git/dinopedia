import {useEffect, useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import DinoTimeline from './components/DinoTimeline';
import Navbar from './components/Navbar';

function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);
  const [favDinosaurs, setFavDinosaurs] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/api/dinosaurs/')
    .then(res => res.json())
    .then(data => setAllDinosaurs(data))
  }, []);



  // [...favDinosaurs] SPREAD OPERATOR
const handleAddFavDino = (dinoId) => {
  const foundFavDino = allDinosaurs.find((dinosaur) => {
    return dinosaur._id === dinoId
  }) //comparing the object to the string
  setFavDinosaurs([...favDinosaurs, foundFavDino])
}

const handleRemoveFavDino = (dinoId) => {
  const filteredFavDinos = favDinosaurs.filter((favDinosaur) => {
    return favDinosaur._id !== dinoId //if this isnt the dinosaur to be removed, its has passed the filter
  })
  setFavDinosaurs(filteredFavDinos)
  // console.log(filteredFavDinos);
}
// console.log("all dinos",allDinosaurs);






  // useEffect(() => {
  //   // let tempFavs = [];
  //   const savedFavs = window.localStorage.getItem('favDinoNames');
  //   if (savedFavs) {
  //     // tempFavs = savedFavs
  //     setFavDinosaurs(
  //       allDinosaurs.filter(dino => savedFavs.includes(dino.name.toLowerCase()))
  //     );
  //   }
  // }, [allDinosaurs]);

  // useEffect(() => {
    
  // }, [favDinosaurs]);

  return (
    <BrowserRouter>
      <Navbar allDinosaurs={allDinosaurs}/>
      <h1>Butts</h1>
      <Routes>
        <Route
          path="/"
          element={<DinoTimeline allDinosaurs={allDinosaurs} handleAddFavDino={handleAddFavDino} handleRemoveFavDino={handleRemoveFavDino} favDinosaurs={favDinosaurs}/>}
        />
        <Route
          path="/favourites"
          element={<DinoTimeline allDinosaurs={favDinosaurs} handleAddFavDino={handleAddFavDino} handleRemoveFavDino={handleRemoveFavDino} favDinosaurs={favDinosaurs}/>}
          // element={<DinoTimeline favDinosaurs={favDinosaurs}/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

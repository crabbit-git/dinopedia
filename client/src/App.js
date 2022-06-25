import {useEffect, useState} from "react";
import './App.css';
import {getDinosaurs} from "./helpers/DinosaursService";
import DinoTimeline from "./components/DinoTimeline";
import Navbar from "./components/Navbar";

function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    getDinosaurs()
    .then(data => setAllDinosaurs(data))
  }, [])

  return (
    <div>
      <Navbar allDinosaurs={allDinosaurs} />
      <h1>Welcome to Dinopedia!</h1>
      <DinoTimeline allDinosaurs={allDinosaurs}/>
    </div>
  );
}

export default App;

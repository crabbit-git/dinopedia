import {useEffect, useState} from "react";
import './App.css';
import {getDinosaurs} from "./helpers/DinosaursService";
import DinoTimeline from "./components/DinoTimeline";

function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    getDinosaurs()
    .then(data => setAllDinosaurs(data))
  }, [])

  return (
    <>
  <h1>Welcome to Dinopedia!</h1>
    <DinoTimeline allDinosaurs={allDinosaurs}/>
    </>
  );
}

export default App;

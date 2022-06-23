import {useEffect, useState} from "react";
import './App.css';
import { getDinosaurs} from "./helpers/DinosaursService";
import DinoTimeline from "./components/DinoTimeline";



function App() {

  const [allDinosaurs, setAllDinosaurs] = useState([]);

  useEffect(() => {
    getDinosaurs()
    .then(data => setAllDinosaurs(data))
  }, [])





  return (
    <>
    
    <DinoTimeline allDinosaurs={allDinosaurs}/>
  <h1>Welcome to Dinopedia!</h1>
    </>
  );
}

export default App;

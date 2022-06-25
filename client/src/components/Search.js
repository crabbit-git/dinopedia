import './Search.css'
import { useState } from 'react';
import Autocomplete from "./Autocomplete";

const Search = ({allDinosaurs}) => {
    
   
    const DinosaurNames = allDinosaurs.map( (dino) => dino.name )

return ( 
  <div>
    <h2>Search</h2>
    <Autocomplete suggestions={DinosaurNames} />
  </div>
);
}
 
export default Search;
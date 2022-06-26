import './Search.css'
import $ from 'jquery'
import React, { useState } from 'react'

const Search = ({allDinosaurs}) => {

  const [searchedDino, setSearchedDino] = useState("")
  console.log( searchedDino)
 
  // used JQuery (ties together event handlers and keyUp functions)
  // to listen for input of a string and for each dinosaur
  // count the index of the letter being typed and match it
  // with the index number of to closest dino. 
    $("#search").keyup(function(){
    $("#background-input").val('');
    let searchText = $("#search").val();
    allDinosaurs.forEach( (dino) => { 
    if(searchText === "")
    $("#background-input").val('');
    else if(dino.name.toLowerCase().indexOf(searchText.toLowerCase())===0)
    {
    let currentLength = searchText.length;
    $("#background-input").val(searchText+""+dino.name.toLowerCase().substring(currentLength)); 
    $("#myButton").click(function() {
    
    });    
    }})
    });

    const handleOnClick = (e) => {
      e.preventDefault()
      allDinosaurs.forEach( (dino) => {
        if (dino.name.toLowerCase() === $("#background-input").val())
        setSearchedDino(dino)
        $("#search").val("")
    }
    )}

    //NEEDS TO GO IN TIMELINE WITH A CALL BACK TO THE RESULT OF THE SEARCH FUNCTION
    // const elmntToView = document.getElementById("sectionId");
    // elmntToView.scrollIntoView(); 

return ( 
  <form id="search-div" >
  <input type="text" id="background-input" />
  <input type="search" id="search" placeholder="Type name of dino.." /> 
  <button id="myButton" type="submit" onClick={handleOnClick} hidden > </button>
  </form>
);
}
 
export default Search;


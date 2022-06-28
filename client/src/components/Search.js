import './Search.css'
import $ from 'jquery'
import React, { useState } from 'react'

const Search = ({allDinosaurs}) => {

  // get a list of dinosaurs by name and all in lower case
  const dinosaurNames = allDinosaurs.map( (dino) => dino.name.toLowerCase())

  // used JQuery (ties together event handlers and keyUp functions)
  // to listen for input of a string and for each dinosaur
  // count the index of the letter being typed and match it
  // with the index number of to closest dino. 
  $("#search").keyup(() => {
    $("#background-input").val('');
    let searchText = $("#search").val();
    dinosaurNames.forEach(dino => { 
      if (searchText === "") {
        $("#background-input").val('');
      } else if (dino.indexOf(searchText.toLowerCase()) === 0) {
      let currentLength = searchText.length;
      $("#background-input").val(searchText+""+dino.substring(currentLength));
      }
    });
  });

  const handleSearch = submit => {
    submit.preventDefault();
    const searchValue = document.querySelector('#background-input').value
    .toLowerCase()
		if(!searchValue) {
      alert('No match found or no search query provided. Please try again!');
			return;
		}
		const selectedNode = document.getElementById(searchValue);
		console.log(`scrolling to ${searchValue} and resetting search box`);
		selectedNode.scrollIntoView({
      behavior: "smooth", block: "center"
    });
    document.querySelector('#search-form').reset();
  }

  return (
    <div id="search-div">
      <form id="search-form" autoComplete="off" onSubmit={handleSearch}>
        <input type="search" name="q" id="background-input" />
        <input type="search" id="search" placeholder="Search for a dinosaur" />
        <button type="submit" id="go" value="Go!">Go!</button>
      </form>
    </div>
  );
}

export default Search;

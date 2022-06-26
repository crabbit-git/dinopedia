import './Search.css'
import $ from 'jquery'

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
    const searchBox = document.querySelector('#background-input');
    const searchValue = searchBox.value;
		if(!searchValue) {
			console.error('no value provided to search for');
			return;
		}
		const selectedNode = document.getElementById(searchValue);
		if(!selectedNode) {
			console.error(`couldn't find node with ID: ${searchValue}`);
		}
		console.log(`will try and scroll node ${selectedNode} into view`);
		selectedNode.scrollIntoView();
  }

  return ( 
    <div id="search-div">
      <form id="search-form" onSubmit={handleSearch}>
        <input type="search" name="q" id="background-input" />
        <input type="search" id="search" placeholder="Search for a dinosaur!" />
        <button type="submit" id="go" value="Go!">Go!</button>
      </form>
    </div>
  );
}

export default Search;

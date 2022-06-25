import './Search.css'
import $ from 'jquery'

const Search = ({allDinosaurs}) => {
  
  // get a list of dinosaurs by name and all in lower case
  const dinosaurNames = allDinosaurs.map( (dino) => dino.name.toLowerCase())


  // used JQuery (ties together event handlers and keyUp functions)
  // to listen for input of a string and for each dinosaur
  // count the index of the letter being typed and match it
  // with the index number of to closest dino. 
    $("#search").keyup(function(){
    $("#background-input").val('');
    let searchText = $("#search").val();
    dinosaurNames.forEach( (dino) => { 
    if(searchText === "")
    $("#background-input").val('');
    else if(dino.indexOf(searchText.toLowerCase())===0)
    {
    let currentLength = searchText.length;
    $("#background-input").val(searchText+""+dino.substring(currentLength));     
    }})
    });

return ( 
  <div id="search-div">
  <input type="text" id="background-input" />
  <input type="search" id="search" placeholder="Type name of dino.." /> 
</div>
);
}
 
export default Search;


import './Search.css'
import $ from 'jquery'
// import Autocomplete from "./Autocomplete";

const Search = ({allDinosaurs}) => {
    

    $("#search").keyup(function(){
      $("#background-input").val('');
      const dinosaurNames = allDinosaurs.map( (dino) => dino.name )
      const searchText = $("#search").val();
      console.log(searchText.toLowerCase());
      if(searchText === "")
        $("#background-input").val('');
      else if(dinosaurNames.indexOf(searchText.toLowerCase())===0)
        {
          const currentLength = searchText.length;
          $("#background-input").val(searchText+""+dinosaurNames.forEach((dino)=> dino.substring(currentLength)));     
        }
    });
return ( 
  // <div>
  //   <h2>Search</h2>
  //   <Autocomplete suggestions={DinosaurNames} />
  // </div>
  <div id="search-div">
  <input type="text" id="background-input" />
  <input type="text" id="search" placeholder="Type name of dino.." />
</div>
);
}
 
export default Search;
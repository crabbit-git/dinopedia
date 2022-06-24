import DinoCard from "./DinoCard";

const DinoTimeline = ({allDinosaurs}) => {
//   const jurassicList = allDinosaurs.map((dino) => {
//     return(
//         <DinoCard dino={dino}/>
//     )
//   })

// const filterByPeriod = list => {
//   const jurassicList = list.filter(dino => {
//      if(dino.period === "Jurassic"){
//      return jurassicList})
//   const triassicList = list.filter(dino => {
//      if(dino.period === "Triassic"){
//      return triassicList})

//   return(
//     console.log(periodList)
//   )
// }

const renderDinos = allDinosaurs.map(dino => {
  let periodClass = dino.period;
  let cardDirection = "right"
  if (allDinosaurs.indexOf(dino) %2 === 0) {
    cardDirection = "left";
  }
    return(
      <DinoCard dino={dino} cardDirection={cardDirection} periodClass={periodClass}/>
    );
});

  return(
    <div className="jurassic-div">
      {renderDinos} 
    </div>
  );
}

export default DinoTimeline

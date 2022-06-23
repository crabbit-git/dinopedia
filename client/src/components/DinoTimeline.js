import DinoCard from "./DinoCard";

const DinoTimeline = ({allDinosaurs}) => {
//   const jurassicList = allDinosaurs.map((dino) => {
//     return(
//         <DinoCard dino={dino}/>
//     )
//   })

const filterByPeriod = function(list){
  const periodList =list.filter((dino) => {
     return dino.period === "Jurassic"     
  })
  return(
    periodList
  )
}
const jurassicList = filterByPeriod(allDinosaurs).map((dino) => {
  return(
    <DinoCard dino={dino}/>
  )
})
console.log(jurassicList);


  return(
    <div className="jurassic-div">
        <h1>Dinos</h1>
        {jurassicList}
        
        
    </div>
      

  )
}

export default DinoTimeline
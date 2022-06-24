import DinoCard from "./DinoCard";

const DinoTimeline = ({allDinosaurs}) => {
//   const jurassicList = allDinosaurs.map((dino) => {
//     return(
//         <DinoCard dino={dino}/>
//     )
//   })

const filterByPeriod = list => {
  const periodList = list.filter(dino => {
     return dino.period === "Jurassic"     
  })
  return(
    periodList
  )
}
const jurassicList = filterByPeriod(allDinosaurs).map(dino => {
  return(
    <DinoCard dino={dino}/>
  )
})
console.log(jurassicList);


  return(
    <div className="jurassic-div">
        
        {jurassicList}
        
        
    </div>
      

  )
}

export default DinoTimeline
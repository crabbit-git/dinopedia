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

const jurassicList = allDinosaurs.map((dino) => {
  if(dino.period === 'Jurassic')
    return(
      <DinoCard dino={dino} containerDirection="left"/>
    )
})
const triassicList = allDinosaurs.map((dino) => {
  if(dino.period === 'Triassic')
    return(
      <DinoCard dino={dino} containerDirection="right"/>
    )
})
const cretaceousList = allDinosaurs.map((dino) => {
  if(dino.period === 'Cretaceous')
    return(
      <DinoCard dino={dino} containerDirection="left"/>
    )
})

  return(
    <div className="jurassic-div">
        
        {jurassicList}
        {triassicList}
        {cretaceousList}
        
        
    </div>
      

  )
}

export default DinoTimeline
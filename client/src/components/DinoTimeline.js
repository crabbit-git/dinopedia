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

const triassicList = allDinosaurs.map((dino) => {
  if(dino.period === 'Triassic')
  return(
    <DinoCard className="TriassicBlue" dino={dino}/>
    )
  })
  const jurassicList = allDinosaurs.map((dino) => {
    if(dino.period === 'Jurassic')
      return(
        <DinoCard className="JurassicTeal" dino={dino}/>
      )
  })
const cretaceousList = allDinosaurs.map((dino) => {
  if(dino.period === 'Cretaceous')
    return(
      <DinoCard className="CretaceousGreen" dino={dino}/>
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
import DinoCard from "./DinoCard";

const DinoTimeline = ({allDinosaurs}) => {

const renderDinos = allDinosaurs.map(dino => {
  let periodClass = dino.period;
  let cardDirection = "right"
  if (allDinosaurs.indexOf(dino) %2 === 0) {
    cardDirection = "left";
  }
    return(
      <DinoCard
      dino={dino}
      key={dino._id}
      cardDirection={cardDirection}
      periodClass={periodClass}
      />
    );
});

  return(
    <div className="jurassic-div">
      {renderDinos} 
    </div>
  );
}

export default DinoTimeline

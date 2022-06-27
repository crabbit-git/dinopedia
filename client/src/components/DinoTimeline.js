import DinoCard from "./DinoCard";

const DinoTimeline = (
  {allDinosaurs, handleAddFavDino, handleRemoveFavDino, favDinosaurs}
) => {

  const renderDinos = () =>
    [...allDinosaurs]
    .sort((a,b) => a.name.localeCompare(b.name))
    .sort((a,b) => b.era.localeCompare(a.era))
    .map((dino, index) => {
    const periodClass = dino.period;
    let cardDirection = "right"
    let isFavourite = favDinosaurs.some(favDino=>{
        return favDino._id === dino._id
    });

    if (index %2 === 0) {
      cardDirection = "left";
    }

    return (
      <DinoCard
        dino={dino}
        key={dino._id}
        cardDirection={cardDirection}
        periodClass={periodClass}
        handleAddFavDino={handleAddFavDino}
        handleRemoveFavDino={handleRemoveFavDino}
        isFavourite={isFavourite}
      />
    );
  })

  return (
    <div className="timeline-container">
      {renderDinos()} 
    </div>
  );
}

export default DinoTimeline;

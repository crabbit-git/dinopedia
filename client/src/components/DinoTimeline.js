import DinoCard from "./DinoCard";

const DinoTimeline = (
  {allDinosaurs, favDinosaurs, handleAddFavDino, handleRemoveFavDino}
) => {
  const renderDinos = () =>
    [...allDinosaurs]
    .sort((a,b) => a.name.localeCompare(b.name))
    .sort((a,b) => b.era.localeCompare(a.era))
    .map((dino, index) => {
      let cardDirection = "right"
      if (index %2 === 0) {
        cardDirection = "left";
      }
      let isFavourite = favDinosaurs.some(favDino => {
          return favDino._id === dino._id
      });
      return (
        <DinoCard
          dino={dino}
          key={dino._id}
          cardDirection={cardDirection}
          periodClass={dino.period}
          handleAddFavDino={handleAddFavDino}
          handleRemoveFavDino={handleRemoveFavDino}
          isFavourite={isFavourite}
        />
      );
    });

  return (
    <div className="timeline-container">
      {renderDinos()} 
    </div>
  );
}

export default DinoTimeline;

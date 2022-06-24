const DinoCard = ({dino, cardDirection, periodClass}) => {
  const containerClass = `container ${cardDirection}`;
  const timelineClass = `timeline ${periodClass}`
  return (
    <div className={timelineClass}>
      <div className={containerClass}>
        <div className="date">{dino.period}</div>
        <i className="icon fa fa-home"/>
        <div className="content">
          <img
              className="dino-image"
              src={dino.pics[0].url}
              alt={dino.name}
              width="300"
          />
          <h2>{dino.name}</h2>
          <p>
            <b>Diet:</b> {dino.eats}
            <br/>
            <b>Found in:</b> {dino.regions.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DinoCard;

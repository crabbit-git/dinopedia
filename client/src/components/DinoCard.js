const DinoCard = ({dino, containerDirection}) => {
  const containerClass = `container ${containerDirection}`;

  return(
    <div className="timeline">
      <div className={containerClass}>
        <div className="date">{dino.period}</div>
          <i className="icon fa fa-home"></i>
          <div className="content">
            <img className="dino-image" src={dino.pics[0].url} alt="" width="300"/>
            <h2>{dino.name}</h2>
            <p>
              Diet: {dino.eats}
              <br/>
              Found in: {dino.regions.join(", ")}
            </p>
      </div>
    </div>
    </div>
  )
}

export default DinoCard;

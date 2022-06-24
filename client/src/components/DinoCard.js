const DinoCard = ({dino}) => {


  return(
    <div className="timeline">
      <div className="container left">
        <div className="date">{dino.period}</div>
          <i className="icon fa fa-home"></i>
            <div className="content">
                <img className="dino-image" src={dino.pics[0].url} alt="" width="300"/>
                <h2>{dino.name}</h2>
                  <p>
                      <b>Diet:</b> {dino.eats}
                      <br/>
                      <b>Found in:</b> {dino.regions.join(", ")}
                  </p>
            </div>
      </div>
    </div>
  )
}

export default DinoCard;

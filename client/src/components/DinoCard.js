const DinoCard = ({dino}) => {
  
    return(
    
<div className="timeline">
<div className="container left">
  <div className="date">{dino.period}</div>
  <i className="icon fa fa-home"></i>
  <div className="content">
    <h2>{dino.name}</h2>
    <p>
      {dino.eats}{dino.regions}
    </p>
  </div>
</div>
</div>
    )
  


}


export default DinoCard
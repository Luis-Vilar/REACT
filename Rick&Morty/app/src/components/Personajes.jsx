function Personajes(props) {
  return (
    <div className="card border badge bg-secondary text-bg-primary" style={{width: "30em"}} key={props.id}>
      {/* Nombre */}
      <h3>{`${props.name} `}</h3>
      {/* status */}
      <h5>{`Status : ${props.status}`}</h5>
      <span className="border "></span>
      {/* Imagen */}
      <img className="img-fluid"src={props.image} alt={props.name} style={{borderRadius : "50%" }}  />
      {/*  */}
    </div>
  );
}

export default Personajes;

function Personajes(props) {
  return (
    <div className="containerPersonajes" key={props.id}>
      {/* Nombre */}
      <h2>{`${props.name} :`}</h2>
      {/* status */}
      <h4>{`Status : ${props.status}`}</h4>
      {/* Imagen */}
      <img src={props.image} alt={props.name} />
    </div>
  );
}

export default Personajes;

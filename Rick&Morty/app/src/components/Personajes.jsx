// componente que recibe un personaje con el cual crea una tarjeta

function Personajes(props) {
  // copiamos en una constante el objeto personaje que recibimos por props
  const personaje = props.personaje;

  // retornamos el JSX que queremos que se muestre
  return (
    <div
      className="card border  bg-secondary text-bg-primary w-25 p-5 m-1 mx-auto rounded-3 "
      key={personaje.id}
    >
      {/* Nombre */}
      <h3>{`${personaje.name} `}</h3>
      {/* Imagen */}
      <img
        className="img-fluid rounded-circle "
        src={personaje.image}
        alt={personaje.name}
      />
      {/* status */}
      <h5>{`Status : ${personaje.status}`}</h5>
      {/* Especie */}
      <h5>{`Especie : ${personaje.species}`}</h5>
      {/* Genero */}
      <h5>{`Genero : ${personaje.gender} `}</h5>
      {/* domicilio */}
      <h5>{`Domicilio actual : ${personaje.location.name} `}</h5>
      {/* domicilio actual */}
      <h5>{`Domicilio natal : ${personaje.origin.name} `}</h5>
      {/*  */}
    </div>
  );
}


// exportamos el componente para poder usarlo en otros archivos
export default Personajes;

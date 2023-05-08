// importamos el componente Personajes
import Personajes from "./Personajes";
import { personajes } from "../contexts/usingContext";

function AppRickMorty() {
  const personajes = personajes;
  personajes
    ? console.table(personajes.results)
    : console.log("Pobablemente cargando datos.. hay internet?");

  return (
      <div className="container">
      <header className="header bg-body-secondary mx-auto text-center fixed-top">
        <h1 className="m-1">Rick & Morty</h1>
        <h5 className="text-end"> by Federico Vilar</h5>
      </header>
      //renderizado condicional si existe personaje
      {personajes ? (
        <div className="row">
          {personajes.results.map((personaje) => (
            <div key={personaje.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <Personajes  personaje={personaje} />
            </div>
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    
  );
}

export default AppRickMorty;

// importamos el componente Personajes
import Personajes from "./components/Personajes";
import { UsingContext } from "./contexts/usingContext";

function App() {
  const contexto = UsingContext();
  const personajes = contexto.personajes;
  console.log (personajes);
  return (
    <div className="container-fluid">
      <header className="header bg-body-secondary mx-auto text-center fixed-top">
        <h1 className="m-2">Rick & Morty</h1>
        <h5 className="text-end"> by Federico Vilar</h5>
      </header>
      //renderizado condicional si existe personaje
      {personajes ? (
        <div className="d-flex flex-wrap ">
          {personajes.results.map((personaje) => (
            <Personajes personaje={personaje} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

// importamos useState y useEffect de React
import { useState, useEffect } from "react";
// importamos el componente Personajes
import Personajes from "./components/Personajes";
// function  del compónente App()
function App() {
  // funcion asincrona para obtener los datos de la API
  async function fetchData(state) {
    // fetch() es una función nativa de JavaScript que permite hacer peticiones HTTP
    // await espera a que la petición se resuelva

    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    // colocamos los datos en el estado que recibimos por parámetro
    state(data);
  }

  // useEffect() es una función nativa de React que permite ejecutar
  // código cuando el componente se monta o se actualiza
  // en este caso, cuando el componente se monta, ejecutamos la función fetchData()
  useEffect(() => {
    fetchData(setPersonajes);
  }, []);
  // declaramos el estado personajes y su función para actualizarlo
  const [personajes, setPersonajes] = useState(null);
  console.log(personajes);

  return (
    <div className="container">
      <h1 >Rick & Morty</h1>

      {personajes ? (
        <div>
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

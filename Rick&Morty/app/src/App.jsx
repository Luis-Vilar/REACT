import { useState, useEffect } from "react";
import Personajes from "./components/Personajes";

function App() {
  async function fetchData(state) {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    state(data);
  }

  useEffect(() => {
    fetchData(setPersonajes);
  }, []);

  const [personajes, setPersonajes] = useState(null);
  console.log(personajes);

  return (
    <div className="App">
      <h1>Rick & Morty</h1>

      {personajes ? (
        <div>
          {personajes.results.map((personaje) => (
            <Personajes
              status={personaje.status}
              id={personaje.id}
              image={personaje.image}
              name={personaje.name}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default App;

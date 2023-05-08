// importamos createContext de React
import { createContext } from "react";
// importamos useState y useEffect de React
import { useState, useEffect } from "react";
// creamos el contexto
//importamos axios
import axios from "axios";
export const Context = createContext();

export default function ContextProvider({ children }) {

    // declaramos el estado personajes y su función para actualizarlo
    const [personajes, setPersonajes] = useState(null);

    const value = { personajes, setPersonajes };
  // creamos una función que hace una petición a la API

  function getPersonajes() {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setPersonajes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // useEffect() es una función nativa de React que permite ejecutar
  // código cuando el componente se monta o se actualiza
  // en este caso, cuando el componente se monta, ejecutamos la función axiosData()
  // pasándole la función setPersonajes() para que actualice el estado
  // de personajes
  useEffect(() => {
    getPersonajes();
  }, []);

  return (
    // envolvemos el componente con el contexto
    <Context.Provider value={value}>{children}</Context.Provider>
  );
}

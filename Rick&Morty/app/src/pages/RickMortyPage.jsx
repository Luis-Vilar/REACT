import ContextProvider from "../contexts/ContextProvider";
import AppRickMorty from "../components/AppRickMorty";

function RickMortyPage() {
  return (
    <ContextProvider>
      <AppRickMorty />
    </ContextProvider>
  );
}

export default RickMortyPage;

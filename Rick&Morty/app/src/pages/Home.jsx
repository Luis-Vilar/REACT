import ContextProvider from "../contexts/ContextProvider";
import App from "../components/App";

function Home() {
  return (
    <ContextProvider>
      <App />
    </ContextProvider>
  );
}

export default Home;

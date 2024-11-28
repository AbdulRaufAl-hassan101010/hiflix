import "./App.css";
import { GlobalProvider } from "./context/GlobalContext";
import BaseRouter from "./routes/BaseRouter";

function App() {
  return (
    <GlobalProvider>
      <BaseRouter />
    </GlobalProvider>
  );
}

export default App;

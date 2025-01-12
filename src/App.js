import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MainRouter from "./router/main.router";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;

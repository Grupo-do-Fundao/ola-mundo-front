import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {

  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;

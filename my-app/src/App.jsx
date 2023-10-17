import { BrowserRouter, Route, Routes } from "react-router-dom";
import Einkaufliste from "./pages/Einkaufsliste";
import Hauptseite from "./pages/Hauptseite";
import Navigation from "./components/Navigation/Navigation"
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hauptseite />} />
        <Route path="/einkaufsliste" element={<Einkaufliste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import Contacto from "./views/Contacto"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
//ruta de navegacion
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <>
      <BrowserRouter>
      <Navigation/>
      {/* si esta en plural porque tiene muchas rutas en este caso son tres home, contacto y notfound*/}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

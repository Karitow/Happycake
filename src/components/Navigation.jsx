import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    //bg body-tertiary
      <>
      <Navbar bg="danger" data-bd-theme="dark">
            <Nav className="me-auto">
             <Link to="/" className="text.white text-decoration-none ms-3">🏠 Home </Link> 
             <Link to="/contacto" className="text-white text-decoration-none ms-3"> 📒 Contacto </Link> 
            </Nav>
            <Navbar.Brand  className="texto">Happy Cake 🍰</Navbar.Brand>
      </Navbar>
      </>
  )
}

export default Navigation

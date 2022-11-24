import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget/CartWidget";

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to='/'>
            Telas Colegiales
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>
                Home
            </Nav.Link>
            <Nav.Link as={Link} to='/category/MasComprado'>Mas Comprado</Nav.Link>
            <Nav.Link as={Link} to='/category/Temporada2022'>Temporada 2022</Nav.Link>
            <Nav.Link as={Link} to='/category/Temporada2023'>Temporada 2023</Nav.Link>
            <Nav.Link as={Link} to='/category/Sale'>SALE</Nav.Link>
        </Nav>
        <CartWidget />
        </Container>
    </Navbar>
    )
}

export default NavBar;
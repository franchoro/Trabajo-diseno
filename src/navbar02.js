import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../styles/navbar.css";
import myLogo from '../midori_logo.jpg';

function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg" logo={myLogo} align='left'>
      <Container>
        <Navbar.Brand href="/"><img src={myLogo} alt="brand logo" height='50'/>MIDORI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <NavDropdown className="color-nav1" title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item className="color-nav2" href="/cactus">CACTUS</NavDropdown.Item>
              <NavDropdown.Item className="color-nav2"href="/suculentas">SUCULENTAS</NavDropdown.Item>
              <NavDropdown.Item className="color-nav2" href="/insumos">INSUMOS</NavDropdown.Item>
              <NavDropdown.Item className="color-nav2" href="/contacto">CONTACTO</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="color-nav2" href="/todos">TODOS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
                <Navbar.Brand >Nombre usuario</Navbar.Brand>
        <Navbar.Brand href="#home" >tienda de disfraces laly</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="https://www.instagram.com/tienda_de_disfraces_laly/">Instagram</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    
  );
}

export default NavBar;

/*

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar className="color-nav" expand="lg" align='left'>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <NavDropdown.Item className="color-nav2" href="/Home">INCIO</NavDropdown.Item>
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

*/
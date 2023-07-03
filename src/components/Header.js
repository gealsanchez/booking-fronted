import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Automobiles App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" href="#home">Home</Nav.Link>
            <NavDropdown title="Automobiles" id="basic-nav-dropdown">
              <NavDropdown.Item href="/add_automobile">Add Automobile</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/delete">
                Delete Automobile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tickets">
                Tickets
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

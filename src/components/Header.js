import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/users';

function Header() {
  const history = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    history('/');
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="List" id="basic-nav-dropdown">
              <NavDropdown.Item href="/add_automobile">Add Automobile</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/delete">
                Delete Automobile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/tickets">
                Tickets
              </NavDropdown.Item>
              <NavDropdown.Item onClick={handleLogout}>
                <Nav.Link>Sign Out</Nav.Link>
              </NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

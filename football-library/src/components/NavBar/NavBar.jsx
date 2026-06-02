import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import './NavBar.css';
import { Link } from "react-router-dom";
        
const NavBar = () => { 
    return( 
            <Navbar expand="lg" className="custom-navbar navbar-dark">
              <Container>
                <Navbar.Brand as={Link} to="/">Football Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/favorites">
                      Favorites
                    </Nav.Link>
                    <Nav.Link href="#link">World cup</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
        
export default NavBar;



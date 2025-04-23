import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

function NavBar({ searchTerm, setSearchTerm}) {  // adding searchTerm and setSearchTerm here is passing them as props from App.jsx so Navbar.jsx can use them here
    return (
        <Navbar expand="lg"  bg="primary">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="/assets/images/Marvel_Comics_(1990).svg" alt="Marvel Logo" height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/add-character">Add Character</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form>
                        <Form.Group>
                            <div className="d-flex align-items-center py-3 gap-2">
                                <Form.Label className="mb-0 search-bar">Character Search</Form.Label>
                                <Form.Control //search box
                                type="text" 
                                placeholder="Search by name or alias"
                                value={searchTerm}  // this is controlled by the parent (app.jsx)'s state. 
                                onChange={(event) => setSearchTerm(event.target.value)}  // this updates the parent's state. when the user types something in, it changes that value to setSearchTerm for the search
                                />
                            </div>
                        
                        </Form.Group>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
  }

  export default NavBar
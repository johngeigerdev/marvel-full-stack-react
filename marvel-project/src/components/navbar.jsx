import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import { useNavigate, useLocation } from 'react-router-dom';

function NavBar({ searchTerm, setSearchTerm}) {  // adding searchTerm and setSearchTerm here is passing them as props from App.jsx so Navbar.jsx can use them here
    
    const navigate = useNavigate();
    const location = useLocation();  //useLocation lets you identify your current URL location

    //will reroute to home if someone searches for a character from another page
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value); // this updates the parent's state. when the user types something in, it changes that value to setSearchTerm for the search
        if(location.pathname !== '/') {
            navigate('/');  //this is just saying to navigate to home if not already there,
        }
    }

    return (
        <Navbar expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/"><img src="/assets/images/Marvel_Comics_(1990).svg" alt="Marvel Logo" height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/add-character" className="text-dark">Add Character</NavDropdown.Item>
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
                                onChange={handleSearchChange}
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
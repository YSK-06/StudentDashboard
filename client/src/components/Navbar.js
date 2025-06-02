import { Navbar as BootstrapNavbar, Nav } from 'bootstrap';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
      <BootstrapNavbar.Brand href="/">Student Dashboard</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle />
      <BootstrapNavbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
          <Nav.Link as={Link} to="/assignments">Assignments</Nav.Link>
          <Nav.Link as={Link} to="/grades">Grades</Nav.Link>
          <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
}
export default Navbar;
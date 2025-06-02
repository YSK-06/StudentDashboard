import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function DashboardNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Navbar.Brand as={Link} to="/">Student Dashboard</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/" className="mx-2">Home</Nav.Link>
          <Nav.Link as={Link} to="/courses" className="mx-2">Courses</Nav.Link>
          <Nav.Link as={Link} to="/assignments" className="mx-2">Assignments</Nav.Link>
          <Nav.Link as={Link} to="/grades" className="mx-2">Grades</Nav.Link>
          <Nav.Link as={Link} to="/messages" className="mx-2">Messages</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default DashboardNavbar;
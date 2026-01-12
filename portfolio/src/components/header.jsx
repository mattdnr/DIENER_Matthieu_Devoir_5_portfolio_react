import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function AppHeader() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">JOHN DOE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">HOME</Nav.Link>
              <Nav.Link href="#services">SERVICES</Nav.Link>
              <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="#contact">CONTACT</Nav.Link>
              <Nav.Link href="#mentions-legales">MENTIONS LÉGALES</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
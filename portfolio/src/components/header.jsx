import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Navbar at the top of any page */

export default function AppHeader() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to ="/home" href="/"> 
            JOHN DOE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/home" className="ms-auto">
              <Nav.Link as={NavLink} to ="/home" href="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/services" href="/services">
                SERVICES
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/portfolio" href="/portfolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/contact" href="/contact">
                CONTACT
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/mentions-legales" href="/mentions-legales">
                MENTIONS LÉGALES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { NavLink } from 'react-router-dom';

/* Navbar at the top of any page */

export default function AppHeader() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container className="text-uppercase mx-3" fluid>
          <Navbar.Brand as={NavLink} to ="/home" href="/"> 
            John Doe
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="underline" className="ms-auto">
              <Nav.Link as={NavLink} to ="/home" href="/home">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/services" href="/services">
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/portfolio" href="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/contact" href="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={NavLink} to ="/mentions-legales" href="/mentions-legales">
                Mentions légales
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
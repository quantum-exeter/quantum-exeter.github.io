import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Container>
              <Navbar.Brand href="#home">Quantum Exeter</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">News</Nav.Link>
                      <Nav.Link href="#team">Team</Nav.Link>
                      <Nav.Link href="#research">Research</Nav.Link>
                      <Nav.Link href="#publications">Publications</Nav.Link>
                      <Nav.Link href="#exeter">Exeter</Nav.Link>
                      <Nav.Link href="#contacts">Contacts</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Container>
      </Navbar>
  );
}

export default BasicExample;
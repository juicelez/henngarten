"use client"; // Mark as client component

import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Header() {
  useEffect(() => {
    // Client-side only code here
  }, []);

  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="fw-bold position-fixed start-0 top-0 w-100"
    >
      <Container fluid>
        <Navbar.Brand href="#">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#contactform">Kontakt</Nav.Link>
            <Nav.Link href="#gartenpflege">Gartenpflege</Nav.Link>
            <Nav.Link href="#gartenbau">Gartenbau</Nav.Link>
            <Nav.Link href="#pflanzenverkauf">Pflanzenverkauf</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

"use client"; // Mark as client component

import { Navbar, Nav, Image, Container } from "react-bootstrap";
import HennGartenLogo from "./logo"; // Corrected import path

export default function Header() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="fixed-top fw-bold"
    >
      <Container className="container-fluid">
        <Navbar.Brand href="#hero-section">
          <HennGartenLogo />
        </Navbar.Brand>
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

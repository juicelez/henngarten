"use client"; // Mark as client component

import { Navbar, Nav, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="px-5 fixed-top fw-bold"
    >
      <Navbar.Brand href="#hero-section">
        <Image
          roundedCircle
          alt="Logo von Henngarten. Blatt mit H für Henngarten als Füllung."
          src="/favicon.png"
          style={{ background: "white", width: "40px" }}
        />
        Henn Garten- und Landschaftsbau
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
    </Navbar>
  );
}

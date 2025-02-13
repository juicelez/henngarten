"use client"; // Mark as client component

import { Navbar, Container, Nav, Image } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      expand="lg"
      className="px-5 sticky-top fw-bold"
    >
      <Navbar.Brand href="#">
        <Image
          roundedCircle
          src="/favicon.png"
          style={{ background: "white", width: "40px" }}
        />
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

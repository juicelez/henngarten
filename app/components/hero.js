"use client"; // Mark as client component
import Image from "next/image";
import { Button, Container } from "react-bootstrap";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="position-relative d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Image
        fill
        src="/fingerhut_jura.webp"
        alt="Garten hinter einem Haus. Menschen auf Treppe."
        style={{ objectFit: "cover" }}
      />
      <Container
        fluid
        className="bg-dark bg-opacity-25 z-1 justify-content-center align-items-center flex-column text-center py-5 m-0"
      >
        <h1 className="fw-bold text-white mb-3">
          Ihr Garten – unsere Expertise.
        </h1>
        <Button href="#contactform" variant="primary">
          Kontakt aufnehmen
        </Button>
      </Container>
    </section>
  );
}

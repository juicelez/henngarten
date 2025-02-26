"use client"; // Mark as client component
import Image from "next/image";
import { Container } from "react-bootstrap";
import ContactButton from "./ContactButton";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="position-relative d-flex justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Image
        fill
        priority
        src="/fingerhut_jura.webp"
        alt="Garten hinter einem Haus. Menschen auf Treppe."
        style={{ objectFit: "cover" }}
      />
      <Container
        fluid
        className="bg-dark bg-opacity-25 z-1 py-5 d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="fw-bold text-white mb-3">
          Ihr Garten – unsere Expertise.
        </h1>
        <ContactButton />
      </Container>
    </section>
  );
}

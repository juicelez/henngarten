"use client";
import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function ContentSection({
  id,
  title,
  text,
  image_url,
  image_alt_text,
}) {
  return (
    <section className="py-5" id={id}>
      <Container>
        <Row>
          <Col>
            <h2 className="h1 fw-bold">{title}</h2>
            <p className="text-secondary">{text}</p>
            <Button href="#contactform" variant="primary">
              Kontakt aufnehmen
            </Button>
          </Col>
          <Col>
            <Image
              className="shadow-lg"
              src={image_url}
              alt={image_alt_text}
              width={500}
              height={300}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

"use client";
import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function ContentSection({
  id,
  title,
  text,
  image_url,
  image_alt_text,
  showButton,
}) {
  return (
    <section className="py-5" id={id}>
      <Container>
        <Row className="d-flex flex-column-reverse flex-lg-row gap-5 align-items-center">
          <Col>
            <h2 className="h1 fw-bold">{title}</h2>
            <p className="text-secondary">{text}</p>
            {showButton && (
              <Button href="#contactform" variant="primary">
                Kontakt aufnehmen
              </Button>
            )}
          </Col>
          <Col>
            <Image
              className="shadow-lg rounded"
              src={image_url}
              alt={image_alt_text}
              layout="responsive"
              width={100}
              height={100}
              style={{ width: "100%", minHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

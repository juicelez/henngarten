"use client";
import Image from "next/image";
import { Button, Container, Row, Col } from "react-bootstrap";

export default function ContentSection({
  id,
  title,
  text,
  image_url,
  image_alt,
  showButton,
  reverseDirection,
}) {
  return (
    <section className="content-section--image-text" id={id}>
      <Container>
        <Row
          className={`d-flex gap-4 gap-lg-5 align-items-center flex-column-reverse ${
            reverseDirection ? "flex-lg-row-reverse" : "flex-column flex-lg-row"
          }`}
        >
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
              alt={image_alt}
              layout="responsive"
              width={100}
              height={100}
              style={{ width: "100%", maxHeight: "400px" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

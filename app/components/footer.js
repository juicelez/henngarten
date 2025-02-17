"use client"; // Mark as client component

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="container-fluid bg-primary text-white text-center px-5 py-3">
      <Container fluid>
        <Row>
          <Col className="text-start">
            <span>© 2025 Henn Garten- und Landschaftsbau GmbH & CoKG</span>
          </Col>
          <Col className="text-start">
            <div className="impressum">
              <h3>Impressum</h3>
              <div className="impressum-text d-flex flex-column">
                <p>Henn Garten- und Landschaftsbau GmbH & CoKG</p>
                <p> Mozartstr. 24 71296 Heimsheim</p>
                <p>
                  Telefon: <a href="tel:+497033-390724">07033-390724</a>
                </p>
                <p>
                  E-Mail:{" "}
                  <a href="mailto:kontakt@henngarten.de">
                    kontakt@henngarten.de
                  </a>
                </p>
                <p>Umsatzsteuer-Id: DE 169446644</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

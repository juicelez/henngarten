"use client";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { Container, Form, Button } from "react-bootstrap";

// Mark as client component

export default function Contactform() {
  return (
    <section id="contactform">
      <Container>
        <Container>
          <h2 className="h1 fw-bold mb-5">Ihr Kontakt zu uns</h2>
          <Form>
            <Form.Group className="mb-3" controlId="contactform">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="email"
                placeholder="Wie dürfen wir Sie ansprechen?"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Telefonnummer</Form.Label>
              <Form.Control
                as="input"
                type="number"
                placeholder="06221 1234567"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Nachricht</Form.Label>
              <Form.Control as="textarea" rows={5} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Abschicken
            </Button>
          </Form>
        </Container>
        <Container>
          <h2 className="h1 fw-bold mb-5">Ihr Kontakt zu uns</h2>
          <Form>
            <FloatingLabel
              controlId="floatingInput"
              label="Name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Ihr Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="text" placeholder="Telefonnummer" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingTextarea2" label="Nachricht">
              <Form.Control as="textarea" style={{ height: "150px" }} />
            </FloatingLabel>

            <Button variant="primary" type="submit">
              Abschicken
            </Button>
          </Form>
        </Container>
        <Container>
          <h2 className="h1 fw-bold mb-5">Ihr Kontakt zu uns</h2>
          <form
            id="contact-form"
            action="https://api.sendinblue.com/v3/forms/YOUR_FORM_ID/contacts"
            method="post"
            encType="multipart/form-data"
          >
            <div className="form-group">
              <label forhtml="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="form-group">
              <label forhtml="phone">Telefonnummer</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label forhtml="message">Nachricht</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary text-white">
              abschicken
            </button>
          </form>
        </Container>
      </Container>
    </section>
  );
}

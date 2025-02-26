"use client";
import { MessageSquare, Phone, Send, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

// Mark as client component

export default function Contactform() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState(false);

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    if (name.length > 0 && phone.length > 0 && message.length > 0) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [name, phone, message]);
  return (
    <section id="contactform" className="py-5">
      <Container>
        <h2 className="h1 fw-bold">Ihr Kontakt zu uns</h2>
        <Form className="d-flex flex-column gap-4">
          <Form.Group controlId="contactform">
            <Form.Label className="d-flex gap-2 align-items-center">
              <User size={"1.1em"} /> Name
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Ihr Name"
              required
              value={name}
              onChange={onNameChange}
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label className="d-flex gap-2 align-items-center">
              <Phone size={"1.1em"} /> Telefonnummer
            </Form.Label>
            <Form.Control
              as="input"
              type="number"
              placeholder="07033 1234567"
              value={phone}
              onChange={onPhoneChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label className="d-flex gap-2 align-items-center">
              {" "}
              <MessageSquare size={"1.1em"} /> Nachricht
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              value={message}
              onChange={onMessageChange}
              maxLength={1000}
            />
          </Form.Group>
          <Button
            className="mt-4 d-flex gap-2 align-items-center"
            style={{ width: "fit-content" }}
            variant="primary"
            type="submit"
            disabled={!validated}
          >
            <Send size={"1.1em"} />
            Abschicken
          </Button>
        </Form>
      </Container>
    </section>
  );
}

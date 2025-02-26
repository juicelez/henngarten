import { Mail } from "lucide-react";
import { Button } from "react-bootstrap";

export default function ContactButton() {
  return (
    <Button
      href="#contactform"
      variant="primary"
      className="d-flex gap-2 align-items-center"
      style={{ width: "fit-content" }}
    >
      <Mail size={"1.1em"} />
      Kontakt aufnehmen
    </Button>
  );
}

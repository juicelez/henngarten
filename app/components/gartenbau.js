"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function Gartenbau() {
  return (
    <section className="py-5" id="gartenbau">
      <div className="row gap-5">
        <div className="col-auto col-lg d-flex flex-column justify-content-center dark">
          <h2 className="h1 fw-bold">Gartenbau</h2>
          <p className="text-secondary">
            Gartenbau ist die Kunst und das Handwerk der Gestaltung, Pflege und
            Verschönerung von Gärten und Grünflächen. Als Garten- und
            Landschaftsbauer bringen wir Fachkenntnisse und Kreativität in Ihren
            Garten und bringen Ihre Vorstellungen in die Gestaltung mit ein.
          </p>
          <Button href="#contactform" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>
        <div className="col d-flex justify-content-center">
          <Image
            className="shadow-lg"
            src="/garden_pool_terrace.jpg"
            alt="Garten im Grünen, mit Pool, Terasse, gepflegtem Rasen und einem schön angelegten Steingarten."
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

"use client";
// Mark as client component
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function Pflanzenverkauf() {
  return (
    <section className="pt-5" id="pflanzenverkauf">
      <div className="row gap-5">
        <div className="col-auto col-lg d-flex flex-column justify-content-center dark">
          <h2 className="h1 fw-bold">Pflanzungen und Verkauf</h2>
          <p className="text-secondary">
            Entdecken Sie unsere breite Auswahl an selbst gezüchteten und
            aufgezogenen Pflanzen. Wir legen großen Wert auf Qualität und bieten
            Ihnen gesunde Pflanzen für Ihren Garten oder Innenbereich. Alles
            regional im Enzkreis erzeugt und großgezogen. Qualität die sich
            durch langelebige und gesunde Pflanzen auszeichnet
          </p>
          <Button href="#contactform" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>
        <div className="col">
          <Image
            className="img-fluid shadow-lg"
            src="/planthouse.jpeg"
            alt="Pflanzenverkauf Impression"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

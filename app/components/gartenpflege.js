"use client";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function Gartenpflege() {
  return (
    <section className="py-5" id="gartenpflege">
      <div className="row gap-5 d-flex flex-row-reverse">
        <div className="col-auto col-lg d-flex flex-column justify-content-center dark">
          <h2 className="h1 fw-bold">Gartenpflege</h2>
          <p className="text-secondary">
            Profitieren Sie von unserem professionellen Gartenpflegeservice, bei
            dem wir Ihren Garten mit Sorgfalt und Fachkenntnis instand halten.
            Wir kümmern uns beispielsweise um Rasenmäharbeit, Unkrautbekämpfung,
            Baumschnitt und allgemeine Gartenpflege. So stellen wir sicher, dass
            Ihr Außenbereich stets gepflegt und ansprechend aussieht.
          </p>
          <Button href="#contactform" variant="primary">
            Kontakt aufnehmen
          </Button>
        </div>
        <div className="col justify-content-center">
          <Image
            src="/plants_roundabout.jpg"
            className="img-fluid shadow-lg"
            alt="Vielfältige Pflanzenlandschaft auf Kreisverkehr"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

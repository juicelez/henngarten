"use client"; // Mark as client component
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero-section" className="min-vh-100">
      <div className="bg-img text-center row" style={{ position: "relative" }}>
        <Image
          src="/fingerhut_jura.webp"
          alt="Hero background"
          fill
          style={{
            objectFit: "cover",
            position: "absolute",
            zIndex: -1,
          }}
          priority
        />
        <div className="container my-auto">
          <div className="text-center text-white">
            <div className="fadein bg-dark bg-opacity-25">
              <svg
                id="Ebene_2"
                data-name="Ebene 2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 89.68 58.37"
                className="svg-logo-badge mb-3"
              >
                <g id="Vordergrund">
                  <g>
                    {/* SVG paths remain the same */}
                    {/* ... */}
                  </g>
                </g>
              </svg>
              <h1 className="fw-bold text-white mb-3">
                Ihr Garten – unsere Expertise.
              </h1>
              <a className="btn btn-primary text-white" href="#contact">
                <span>Kontakt aufnehmen</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

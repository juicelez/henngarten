"use client";

import { useEffect } from "react";

// Components
import Hero from "./components/hero";
import Header from "./components/header";
import Gartenbau from "./components/gartenbau";
import Contactform from "./components/contactform";
import Gartenpflege from "./components/gartenpflege";
import Pflanzenverkauf from "./components/pflanzenverkauf";

export default function Home() {
  useEffect(() => {
    // Client-side only code here
  }, []);

  return (
    <div className="vh-100">
      <Header />
      <Hero />
      <Gartenbau />
      <Gartenpflege />
      <Pflanzenverkauf />
      <Contactform />
    </div>
  );
}

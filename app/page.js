"use client";

import { useEffect } from "react";

// Components
import Hero from "./components/hero";
import Header from "./components/header";
import Contactform from "./components/contactform";
import ContentSection from "./components/contentSection";
import Pflanzenverkauf from "./components/pflanzenverkauf";

import contentblocks from "./data/content-blocks.json";
import Footer from "./components/footer";
export default function Home() {
  return (
    <div className="vh-100">
      <Header />
      <main>
        <Hero />
        {contentblocks.map((contentblock) => (
          <ContentSection key={contentblock.id} {...contentblock} />
        ))}
        <Pflanzenverkauf />
        <Contactform />
      </main>
      <Footer />
    </div>
  );
}

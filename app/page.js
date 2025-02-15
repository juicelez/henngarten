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
  useEffect(() => {
    const links = document.querySelectorAll('a[href*="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);
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

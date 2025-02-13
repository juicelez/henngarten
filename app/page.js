"use client";

import { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

import { Container, Row, Col } from "react-bootstrap";
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
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
    </div>
  );
}

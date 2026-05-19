"use client";

import { useEffect } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Belt from "@/components/Belt";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Why from "@/components/Why";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import "./redesign.css";

export default function Home() {
  // Add `redesign` class on body so redesign.css scopes apply,
  // and remove it on unmount so other routes (/aszf, /adatvedelem) stay clean.
  useEffect(() => {
    document.body.classList.add("redesign");
    return () => document.body.classList.remove("redesign");
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Belt />
        <Services />
        <Pricing />
        <Why />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

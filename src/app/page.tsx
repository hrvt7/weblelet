import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import WhatWeExamine from "@/components/WhatWeExamine";
import SampleReport from "@/components/SampleReport";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import LeadForm from "@/components/LeadForm";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <HowItWorks />
        <WhatWeExamine />
        <SampleReport />
        <WhyUs />
        <Pricing />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

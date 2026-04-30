import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/landing/Hero";
import Process from "@/components/landing/Process";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

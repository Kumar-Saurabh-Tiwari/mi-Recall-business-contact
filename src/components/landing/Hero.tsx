import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-scan.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-hero">
      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(hsl(var(--gold))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--gold))_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-deep/40 bg-gold/10 text-xs text-gold-deep font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Card Recognition</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Transform Paper into{" "}
            <span className="text-gradient-gold">Data Instantly.</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            The professional way to scan, organize, and sync your networking
            leads using AI. Never lose a business card again.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to="/register">
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="goldOutline" size="xl">
              <a href="#process">See how it works</a>
            </Button>
          </div>

          <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div>Cards scanned</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">99.4%</div>
              <div>Accuracy</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="text-2xl font-bold text-foreground">2.1s</div>
              <div>Avg. scan</div>
            </div>
          </div>
        </div>

        <div className="relative animate-slide-up">
          <div className="absolute -inset-10 bg-gold/20 blur-3xl rounded-full opacity-50" />
          <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-gold">
            <img
              src={heroImg}
              alt="Smartphone scanning a luxury black business card with gold lettering"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
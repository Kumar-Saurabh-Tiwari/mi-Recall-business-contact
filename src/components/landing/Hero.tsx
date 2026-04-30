import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Mail, Phone, Building2, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-gold-bright/20 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-32 w-[450px] h-[450px] rounded-full bg-gold/15 blur-3xl animate-blob [animation-delay:-4s]" />
      <div className="absolute inset-0 bg-grid-gold opacity-40" />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-deep/40 bg-gold/10 backdrop-blur-sm text-xs text-gold-deep font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-bright opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-bright" />
            </span>
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI-Powered Card Recognition</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            Transform Paper into{" "}
            <span className="relative inline-block">
              <span className="text-gradient-gold">Data Instantly.</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M0,5 Q50,0 100,5 T200,5" stroke="hsl(var(--gold-bright))" strokeWidth="2" fill="none" className="opacity-70" />
              </svg>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
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

          <div className="flex flex-wrap items-center gap-3 mt-8 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["A","M","P","D"].map((l, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-bright to-gold border-2 border-background flex items-center justify-center text-[hsl(0_0%_8%)] text-xs font-bold">
                  {l}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-1 text-gold-bright">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-medium text-foreground">4.9/5</span>
            <span>from 2,400+ professionals</span>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-border/60">
            {[
              { v: "50K+", l: "Cards scanned" },
              { v: "99.4%", l: "Accuracy" },
              { v: "2.1s", l: "Avg. scan" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-bold text-gradient-gold">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual: phone scan + floating contact cards */}
        <div className="relative animate-slide-up h-[520px] hidden lg:block">
          <div className="absolute inset-0 bg-gold-bright/20 blur-3xl rounded-full opacity-60" />

          {/* Phone frame */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[480px] rounded-[40px] bg-[hsl(0_0%_8%)] border-[10px] border-[hsl(0_0%_12%)] shadow-elegant overflow-hidden animate-float">
            {/* Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-[hsl(0_0%_12%)] rounded-full z-10" />
            <div className="relative w-full h-full bg-gradient-to-br from-[hsl(40_50%_99%)] to-[hsl(40_35%_94%)] p-4 pt-10">
              {/* Card being scanned */}
              <div className="relative mt-4 rounded-2xl bg-gradient-to-br from-[hsl(0_0%_12%)] to-[hsl(0_0%_18%)] p-5 shadow-2xl overflow-hidden">
                <div className="text-gold-bright text-[10px] tracking-widest mb-2">EXECUTIVE</div>
                <div className="text-white font-bold text-lg leading-tight">Alexandra Chen</div>
                <div className="text-white/60 text-xs mt-0.5">VP of Sales · Helix Capital</div>
                <div className="mt-4 space-y-1 text-white/70 text-[10px]">
                  <div>alex@helix.co</div>
                  <div>+1 (415) 555-2210</div>
                </div>
                {/* Scan line */}
                <div className="absolute inset-x-0 h-[3px] bg-gradient-to-r from-transparent via-gold-bright to-transparent shadow-[0_0_20px_hsl(var(--gold-bright))] animate-scan-line" />
              </div>

              {/* Extracted fields preview */}
              <div className="mt-6 space-y-2">
                {[
                  { i: Mail, label: "alex@helix.co" },
                  { i: Phone, label: "+1 (415) 555-2210" },
                  { i: Building2, label: "Helix Capital" },
                ].map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[hsl(40_30%_93%)] border border-[hsl(40_25%_88%)] animate-fade-in"
                    style={{ animationDelay: `${0.5 + idx * 0.2}s`, opacity: 0 }}
                  >
                    <f.i className="w-3.5 h-3.5 text-gold-deep" />
                    <span className="text-[11px] text-foreground font-medium truncate">{f.label}</span>
                    <Check className="w-3.5 h-3.5 text-green-600 ml-auto" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating card 1 — top left */}
          <div className="absolute top-4 left-0 w-52 rounded-xl bg-card border border-border shadow-elegant p-4 animate-float-slow rotate-[-6deg]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-bright to-gold flex items-center justify-center text-[hsl(0_0%_8%)] text-xs font-bold">MB</div>
              <div>
                <div className="text-xs font-semibold">Marcus Bellini</div>
                <div className="text-[10px] text-muted-foreground">Founder</div>
              </div>
            </div>
            <div className="text-[10px] text-muted-foreground">Northwind Studio</div>
          </div>

          {/* Floating card 2 — bottom right */}
          <div className="absolute bottom-8 right-0 w-56 rounded-xl bg-card border border-border shadow-elegant p-4 animate-float [animation-delay:-2s] rotate-[5deg]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-bright to-gold flex items-center justify-center text-[hsl(0_0%_8%)] text-xs font-bold">PR</div>
              <div>
                <div className="text-xs font-semibold">Priya Raman</div>
                <div className="text-[10px] text-muted-foreground">Partnerships</div>
              </div>
              <Check className="w-4 h-4 text-green-600 ml-auto" />
            </div>
            <div className="text-[10px] text-muted-foreground">Synced to CRM ✓</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="py-28">
    <div className="container">
      <div className="relative overflow-hidden rounded-[2rem] border border-gold/40 bg-gradient-to-br from-card via-card to-secondary/40 p-12 md:p-20 text-center shadow-elegant">
        {/* Animated blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gold-bright/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gold/20 blur-3xl animate-blob [animation-delay:-3s]" />
        <div className="absolute inset-0 bg-grid-gold opacity-30" />

        {/* Shimmer line */}
        <div className="absolute top-0 inset-x-0 h-px bg-shimmer animate-shimmer" />

        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5 leading-[1.1]">
            Your next big deal is in a <span className="text-gradient-gold">stack of cards.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of professionals digitizing their networks with mi-Recall.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/register">
              Start free trial <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <p className="text-xs text-muted-foreground mt-5">No credit card required · Free 14-day trial</p>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
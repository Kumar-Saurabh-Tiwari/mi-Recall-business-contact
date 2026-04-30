import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section className="py-24">
    <div className="container">
      <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-10 md:p-16 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent" />
        <div className="relative max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Your next big deal is in a <span className="text-gradient-gold">stack of cards.</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of professionals digitizing their networks with CardVault.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/register">
              Start free trial <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTA;
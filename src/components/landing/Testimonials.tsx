import { Star, Quote } from "lucide-react";

const items = [
  {
    quote: "Mi-Recall replaced an entire afternoon of manual data entry after every conference. Game changer.",
    name: "Alexandra Chen",
    role: "VP of Sales, Helix Capital",
    initials: "AC",
  },
  {
    quote: "The AI accuracy is unreal — even on bilingual cards with stylized fonts. Worth every penny.",
    name: "Marcus Bellini",
    role: "Founder, Northwind Studio",
    initials: "MB",
  },
  {
    quote: "We synced 4,000 leads from a trade show into Salesforce in under an hour. My team is obsessed.",
    name: "Priya Raman",
    role: "Head of Partnerships, Lumen AI",
    initials: "PR",
  },
];

const Testimonials = () => (
  <section className="relative py-28 border-t border-border overflow-hidden">
    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold-bright/10 blur-3xl animate-blob" />
    <div className="container relative">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-sm uppercase tracking-[0.3em] text-gold-deep mb-3 font-semibold">Loved by leaders</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
          Networking, <span className="text-gradient-gold">reimagined.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div
            key={t.name}
            className="group relative bg-card border border-border rounded-2xl p-8 card-lift hover:border-gold/50 animate-fade-in"
            style={{ animationDelay: `${i * 0.12}s`, opacity: 0 }}
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20 group-hover:text-gold/40 transition-colors" />
            <div className="flex gap-1 mb-4 text-gold-bright">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-foreground leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-bright to-gold flex items-center justify-center text-[hsl(0_0%_8%)] font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

const logos = [
  "Helix Capital", "Northwind", "Lumen AI", "Meridian", "Atelier Nove",
  "Vertex Group", "Halcyon", "Cobalt Labs", "Origami", "Stratos",
];

const TrustedBy = () => (
  <section className="py-14 border-t border-border bg-background overflow-hidden">
    <div className="container">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
        Trusted by professionals at
      </p>
      <div className="relative mask-fade-edges">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="text-2xl font-bold tracking-tight text-muted-foreground/70 hover:text-gold-deep transition-colors shrink-0"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrustedBy;

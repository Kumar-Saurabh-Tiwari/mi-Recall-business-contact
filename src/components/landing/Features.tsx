import { Shield, Zap, Search, Users, Smartphone, Globe } from "lucide-react";

const items = [
  { icon: Zap, title: "Instant OCR", desc: "Sub-second extraction powered by GPT-vision class models." },
  { icon: Shield, title: "Bank-grade security", desc: "End-to-end AES-256 encryption on every record." },
  { icon: Search, title: "Smart search", desc: "Find any contact by company, role, event, or note." },
  { icon: Users, title: "Team workspaces", desc: "Share leads and collaborate across your sales org." },
  { icon: Smartphone, title: "Native iOS & Android", desc: "Scan offline; we sync the moment you're back online." },
  { icon: Globe, title: "CRM integrations", desc: "One-click sync to Salesforce, HubSpot, and Pipedrive." },
];

const Features = () => {
  return (
    <section id="features" className="py-24 border-t border-border bg-card/30">
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-gold mb-3">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for professionals who <span className="text-gradient-gold">network at scale.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it) => (
            <div key={it.title} className="group bg-background p-8 hover:bg-card transition-colors">
              <div className="w-11 h-11 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <it.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-semibold mb-2">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
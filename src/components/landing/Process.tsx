import { ScanLine, Cpu, CloudUpload } from "lucide-react";

const steps = [
  {
    icon: ScanLine,
    title: "Scan Card",
    desc: "Snap a photo of any business card with your phone camera in seconds.",
  },
  {
    icon: Cpu,
    title: "AI Extraction",
    desc: "Our AI parses names, titles, emails, phones, and companies with 99% accuracy.",
  },
  {
    icon: CloudUpload,
    title: "Save to Cloud",
    desc: "Contacts sync instantly to your encrypted vault — searchable from anywhere.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-grid-gold opacity-30" />
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-gold-deep mb-3 font-semibold">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            From card to contact in <span className="text-gradient-gold">three steps.</span>
          </h2>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card border border-border rounded-3xl p-8 card-lift hover:border-gold/50 animate-fade-in"
              style={{ animationDelay: `${i * 0.15}s`, opacity: 0 }}
            >
              {/* Step number badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gold-bright to-gold flex items-center justify-center text-[hsl(0_0%_8%)] font-bold text-lg shadow-gold border-4 border-background">
                {i + 1}
              </div>

              <div className="mt-4 flex justify-center">
                <div className="relative w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <s.icon className="w-7 h-7 text-gold-deep" />
                  <div className="absolute inset-0 rounded-2xl bg-gold-bright/0 group-hover:bg-gold-bright/10 transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-center mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed text-center">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
import { ScanLine, Cpu, CloudUpload, ArrowRight } from "lucide-react";

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
    <section id="process" className="py-24 border-t border-border">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gold mb-3">How it works</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            From card to contact in <span className="text-gradient-gold">three steps.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
          {steps.map((s, i) => (
            <div key={s.title} className="flex md:contents">
              <div className="group relative flex-1 p-8 rounded-2xl bg-card border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center mb-6 shadow-gold">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-xs font-semibold text-gold mb-2">STEP {i + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-8 -mx-2 z-10">
                  <ArrowRight className="w-5 h-5 text-gold" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
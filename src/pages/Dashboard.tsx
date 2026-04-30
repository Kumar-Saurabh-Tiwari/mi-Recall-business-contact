import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Camera, Mail, Phone, Building2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const contacts = [
  { name: "Alexandra Chen", role: "VP of Sales", company: "Helix Capital", email: "alex@helix.co", phone: "+1 (415) 555-2210" },
  { name: "Marcus Bellini", role: "Founder & CEO", company: "Northwind Studio", email: "marcus@northwind.io", phone: "+1 (212) 555-9988" },
  { name: "Priya Raman", role: "Head of Partnerships", company: "Lumen AI", email: "priya@lumen.ai", phone: "+1 (650) 555-4471" },
  { name: "Daniel Okafor", role: "Investment Director", company: "Meridian Ventures", email: "d.okafor@meridian.vc", phone: "+44 20 7946 0991" },
  { name: "Sofia Marchetti", role: "Creative Director", company: "Atelier Nove", email: "sofia@atelier-nove.it", phone: "+39 02 5550 1133" },
];

const initials = (n: string) => n.split(" ").map((p) => p[0]).slice(0, 2).join("");

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-28 pb-20">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-sm text-gold uppercase tracking-widest mb-2">Your Vault</p>
            <h1 className="text-3xl md:text-4xl font-bold">Good evening, Jane.</h1>
            <p className="text-muted-foreground mt-1">You have {contacts.length} contacts in your vault.</p>
          </div>
          <Button variant="gold" size="xl">
            <Camera className="w-4 h-4" /> Scan Now
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Contacts", value: "128" },
            { label: "This Week", value: "12" },
            { label: "Synced to CRM", value: "98%" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-muted-foreground">{s.label}</div>
              <div className="text-3xl font-bold mt-2 text-gradient-gold">{s.value}</div>
            </div>
          ))}
        </div>

        {/* Recent contacts */}
        <div className="rounded-2xl border border-border bg-card overflow-hidden">
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-border">
            <div>
              <h2 className="text-lg font-semibold">Recent Contacts</h2>
              <p className="text-sm text-muted-foreground">Latest cards added to your vault.</p>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input placeholder="Search contacts..." className="pl-9" />
            </div>
          </div>

          <ul className="divide-y divide-border">
            {contacts.map((c) => (
              <li key={c.email} className="p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-secondary/40 transition-colors">
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-primary-foreground font-semibold text-sm shrink-0">
                    {initials(c.name)}
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{c.name}</div>
                    <div className="text-sm text-muted-foreground truncate">{c.role}</div>
                  </div>
                </div>
                <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                  <Building2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="truncate">{c.company}</span>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground min-w-0 flex-1">
                  <Mail className="w-4 h-4 text-gold shrink-0" />
                  <span className="truncate">{c.email}</span>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                  <Phone className="w-4 h-4 text-gold" />
                  <span>{c.phone}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
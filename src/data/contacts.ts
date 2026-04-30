export type Contact = {
  name: string;
  role: string;
  company: string;
  email: string;
  phone: string;
};

export const contacts: Contact[] = [
  {
    name: "Alexandra Chen",
    role: "VP of Sales",
    company: "Helix Capital",
    email: "alex@helix.co",
    phone: "+1 (415) 555-2210",
  },
  {
    name: "Marcus Bellini",
    role: "Founder & CEO",
    company: "Northwind Studio",
    email: "marcus@northwind.io",
    phone: "+1 (212) 555-9988",
  },
  {
    name: "Priya Raman",
    role: "Head of Partnerships",
    company: "Lumen AI",
    email: "priya@lumen.ai",
    phone: "+1 (650) 555-4471",
  },
  {
    name: "Daniel Okafor",
    role: "Investment Director",
    company: "Meridian Ventures",
    email: "d.okafor@meridian.vc",
    phone: "+44 20 7946 0991",
  },
  {
    name: "Sofia Marchetti",
    role: "Creative Director",
    company: "Atelier Nove",
    email: "sofia@atelier-nove.it",
    phone: "+39 02 5550 1133",
  },
];

export const scanPreview: Contact = {
  name: "Adrian Park",
  role: "Partnerships Lead",
  company: "SilverArc Labs",
  email: "adrian@silverarc.io",
  phone: "+1 (646) 555-3109",
};

export const initials = (name: string) => name.split(" ").map((part) => part[0]).slice(0, 2).join("");

import { ScanLine, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const cols = [
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Product",
    links: ["Features", "Pricing", "Integrations", "Changelog"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies"],
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-gold to-gold-deep">
              <ScanLine className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">
              Card<span className="text-gradient-gold">Vault</span>
            </span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            Transform paper business cards into organized digital intelligence.
          </p>
        </div>

        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="font-semibold text-foreground mb-4 text-sm">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CardVault. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
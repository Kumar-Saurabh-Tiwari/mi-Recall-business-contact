import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScanLine } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-gold-bright to-gold shadow-gold transition-transform group-hover:scale-110">
            <ScanLine className="w-5 h-5 text-[hsl(0_0%_8%)]" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            mi-<span className="text-gradient-gold">Recall</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#features" className="hover:text-gold transition-colors">Features</a>
          <a href="/#process" className="hover:text-gold transition-colors">How it works</a>
          <a href="/#pricing" className="hover:text-gold transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-2">
          {pathname !== "/login" && (
            <Button asChild variant="ghost" size="sm" className="hover:text-gold">
              <Link to="/login">Login</Link>
            </Button>
          )}
          <Button asChild variant="gold" size="sm">
            <Link to="/register">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
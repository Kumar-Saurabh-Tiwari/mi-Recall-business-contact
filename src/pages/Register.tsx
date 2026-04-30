import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScanLine, ArrowRight } from "lucide-react";
import { FormEvent } from "react";

const Register = () => {
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-hero p-4">
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(hsl(var(--gold))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--gold))_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="relative w-full max-w-md">
        <Link to="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-gold to-gold-deep shadow-gold">
            <ScanLine className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">
            Card<span className="text-gradient-gold">Vault</span>
          </span>
        </Link>

        <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
          <h1 className="text-2xl font-bold mb-1">Create your vault</h1>
          <p className="text-sm text-muted-foreground mb-6">Start digitizing cards in under a minute.</p>

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="At least 8 characters" required />
            </div>
            <Button type="submit" variant="gold" className="w-full" size="lg">
              Create account <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-muted-foreground text-center mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-gold hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
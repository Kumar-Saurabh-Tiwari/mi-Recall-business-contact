import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone } from "lucide-react";
import { contacts, initials, scanPreview } from "@/data/contacts";

const ContactDetail = () => {
  const navigate = useNavigate();
  const { email } = useParams();
  const decodedEmail = email ? decodeURIComponent(email) : "";

  const contact = useMemo(
    () => [scanPreview, ...contacts].find((entry) => entry.email.toLowerCase() === decodedEmail.toLowerCase()),
    [decodedEmail]
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container pt-28 pb-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-gold uppercase tracking-widest mb-2">Contact Detail</p>
            <h1 className="text-3xl md:text-4xl font-bold">{contact ? contact.name : "Contact not found"}</h1>
            <p className="text-muted-foreground mt-1">
              {contact ? `${contact.role} · ${contact.company}` : "We couldn't find that contact in your vault."}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="goldOutline" size="sm" onClick={() => navigate("/dashboard")}>Back to dashboard</Button>
            {contact ? (
              <Button variant="gold" size="sm" onClick={() => navigate("/dashboard")}>Edit in dashboard</Button>
            ) : null}
          </div>
        </div>

        {contact ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold to-gold-deep flex items-center justify-center text-primary-foreground font-semibold text-lg">
                  {initials(contact.name)}
                </div>
                <div>
                  <div className="text-xl font-semibold">{contact.name}</div>
                  <div className="text-sm text-muted-foreground">{contact.role}</div>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-semibold mt-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gold" />
                    {contact.email}
                  </div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Phone</div>
                  <div className="font-semibold mt-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold" />
                    {contact.phone}
                  </div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Company</div>
                  <div className="font-semibold mt-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-gold" />
                    {contact.company}
                  </div>
                </div>
                <div className="rounded-xl bg-secondary/50 p-4">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Role</div>
                  <div className="font-semibold mt-2">{contact.role}</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm text-gold uppercase tracking-widest">Notes</div>
              <div className="text-lg font-semibold mt-2">Last touchpoint</div>
              <p className="text-sm text-muted-foreground mt-3">Conference follow-up · 2 days ago</p>
              <div className="mt-6 rounded-xl border border-border bg-background p-4 text-sm text-muted-foreground">
                Add reminders or follow-up tasks for this contact.
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-border bg-card p-6 text-sm text-muted-foreground">
            Try returning to the dashboard and selecting a contact again.
          </div>
        )}
      </main>
    </div>
  );
};

export default ContactDetail;
